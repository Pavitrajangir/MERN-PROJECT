import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import Nav from "../components/Nav";
import { Link } from "react-router";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.cart || []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="text-white min-h-screen">
      <header
        className="relative w-full h-80 bg-no-repeat bg-[length:100%_100%] bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/detailed-3d-illustration-men39s-fashion-display-with-business-attire-arranged-classic-wooden-hangers-showcased-clean-white-lighting_41097-18792.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10">
          <Nav />
          <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-4xl font-bold">NEWS</h2>
            <h1 className="mt-10">
              <Link to="/">
                <span className="hover:text-orange-300 cursor-pointer">
                  Home
                </span>
              </Link>
              / Best Selling - Home1
            </h1>
          </div>
        </div>
      </header>
      <div className=" p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        <div className="flex w-full max-w-6xl gap-6">
          <div className="w-2/3">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-700 pb-4 mb-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-[#a67c52] font-bold">
                      ${(Number(item.price) || 0).toFixed(2)}
                    </p>

                    <p className="text-gray-400 mt-2">
                      Total: $
                      {(Number(item.price) * item.quantity || 0).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        className="border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-700"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-4 text-lg">{item.quantity}</span>
                      <button
                        className="border border-gray-500 px-3 py-1 rounded-md hover:bg-gray-700"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Total: $
                      {item.price
                        ? (item.price * item.quantity).toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
