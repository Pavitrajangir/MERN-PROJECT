import express from 'express';
import Cart from '../models/Cart.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add to Cart
router.post('/add', authenticateUser, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await Cart.findOne({ user: req.user.id });

    if (!cart) {
      cart = new Cart({ user: req.user.id, products: [{ product: productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.json(cart);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Cart
router.get('/', authenticateUser, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('products.product');
    if (!cart) return res.status(404).json({ message: 'Cart is empty' });

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove Item from Cart
router.delete('/remove/:productId', authenticateUser, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.products = cart.products.filter(item => item.product.toString() !== req.params.productId);
    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
