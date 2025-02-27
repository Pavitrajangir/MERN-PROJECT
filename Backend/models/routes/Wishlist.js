import express from 'express';
import Wishlist from '../models/Wishlist.js';
import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Add to Wishlist
router.post('/add', authenticateUser, async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, products: [productId] });
    } else {
      if (!wishlist.products.includes(productId)) {
        wishlist.products.push(productId);
      }
    }

    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Wishlist
router.get('/', authenticateUser, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
    if (!wishlist) return res.status(404).json({ message: 'Wishlist is empty' });

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove from Wishlist
router.delete('/remove/:productId', authenticateUser, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });

    wishlist.products = wishlist.products.filter(item => item.toString() !== req.params.productId);
    await wishlist.save();

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
