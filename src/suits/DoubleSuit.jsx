import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router";
import { Minus, Plus } from "lucide-react";
import Footer from "../components/Footer";

function DoubleSuit() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
  

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const [activeTab, setActiveTab] = useState("description");

  const recommendedProducts = [
    {
      src: "/image4.webp",
      src2: "/image44.webp",
      title: "Double Breasted Blazer",
      title2: "Rs 10000",
      link: "double-breasted-blazer",
    },
    {
      src: "/redsuit.webp",
      src2: "/redsuit.webp",
      title: "Party Wear Blazer",
      title2: "Rs 8000",
      link: "party-wear-blazer",
    },
    {
      src: "/image5.webp",
      src2: "/image55.webp",
      title: "Unique Silk Blazer",
      title2: "Rs 12000",
      link: "unique-silk-blazer",
    },
    {
      src: "/image1.webp",
      src2: "/image11.webp",
      title: "Tweed Formal Blazer",
      title2: "Rs 8000",
      link: "tweed-formal-blazer",
    },
  ];

  useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setCart(storedCart);
        setWishlist(storedWishlist);
      }, []);
    
      // Save cart to local storage whenever it changes
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
      // Save wishlist to local storage whenever it changes
      useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }, [wishlist]);
    
      const addToCart = () => {
        const product = {
          image: "/image3.webp",
          id: 4,
          name: "Slim Formal Blazer",
          price: 9000,
          quantity,
        };
        // Check if product is already in cart
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((cartItem) => cartItem.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
      };
    
      const addToWishlist = () => {
        const product = {
          image: "/image3.webp",
          id: 4,
          name: "Slim Formal Blazer",
          price: 9000,
        };
        if (!wishlist.some((item) => item.id === product.id)) {
          setWishlist([...wishlist, product]);
        }
      };

  return (
    <>
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
              <h2 className="text-4xl font-bold">COLLECTION</h2>
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

        <div className="text-white flex justify-center items-center mt-20 p-10">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img
                src="/image3.webp"
                alt="Slim Formal Blazer"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Slim Formal Blazer</h1>
              <p className="text-2xl font-semibold text-orange-400">Rs 9000</p>

              <div className="text-yellow-400 text-lg">
                ★★★☆☆ <span className="text-gray-400">(1 review)</span>
              </div>

              <div className="space-y-3">
                <p className="text-gray-400">
                  Choose style:{" "}
                  <span className="text-white font-semibold">Blazer</span>
                </p>
                <div className="flex items-center mt-10 space-x-4">
                  <span className="text-gray-400">Size:</span>
                  <button className="border px-4 py-1">42</button>
                </div>
                <div className="flex items-center mt-10 space-x-4">
                  <span className="text-gray-400">Material:</span>
                  <button className="border px-4 py-1">Silk</button>
                </div>
                <div className="flex items-center mt-10 space-x-4">
                  <span className="text-gray-400">Fit of Blazer:</span>
                  <button className="border px-4 py-1">Slim Formal</button>
                </div>
              </div>

              <p className="text-lg">
                Total: <span className="font-semibold">Rs {9000 * quantity}</span>
              </p>
              <p className="text-green-400 font-semibold">19 In stock!</p>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button className="px-3 py-1" onClick={decreaseQuantity}>
                    <Minus />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button className="px-3 py-1" onClick={increaseQuantity}>
                    <Plus />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
              <button onClick={addToCart}
                    className="bg-orange-400 cursor-pointer text-black font-semibold py-2 rounded-md">
                  Add to Cart
                </button>
                <button onClick={addToWishlist}
                    className="bg-gray-700 cursor-pointer text-white font-semibold py-2 rounded-md">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white p-10">
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <div className="text-gray-400">
              <p>👀 181 People are viewing this right now</p>
              <p>🔥 Sold 58 Products in last 17 Hours</p>
            </div>
            <div className="flex space-x-2">
              <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
              <span className="text-gray-400">(8 Reviews)</span>
            </div>
          </div>

          <div className="flex space-x-6 mt-6 border-b border-gray-700 pb-2">
            {["description", "shipping", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`capitalize text-lg font-semibold ${
                  activeTab === tab
                    ? "text-white border-b-2 border-orange-400"
                    : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-6 text-gray-300">
            {activeTab === "description" && (
              <p>
                Time is swift, placing at the middle with structured elegance,
                seeking nothing but grace. The diamond-shaped body, an element
                of layered textures, settles gently in motion. The garden of
                calmness, harmonized with structured patterns, flows in a
                rhythmic dance. The final touch, a refined essence, settles into
                place with ease.
                <br />
                <br />
                <span className="font-bold text-lg">
                  Lorem ipsum serves as the foundation.
                </span>
                <br />
                <span>
                  The path of learning, refined by discipline, moves in waves of
                  endurance and commitment. With each step, the essence of
                  effort becomes clearer, enriching the journey toward mastery.
                  The echoes of experience shape the understanding of the
                  delicate balance between effort and fulfillment.
                </span>
                <br />
                <br />
                <span className="font-bold text-lg">
                  A rhythm of movement shapes the foundation.
                </span>
                <br />
                <span>
                  The steps of motion weave into the sequence of structured
                  learning. The passing of time aligns with the careful
                  selection of paths. A journey layered with understanding
                  shapes the fabric of knowledge. At the foundation of all
                  effort, a balance between strength and adaptability emerges.
                </span>
                <br />
                <br />
                <span className="font-bold text-lg">
                  The essence of connection defines the movement.
                </span>
                <br />
                <span>
                  A presentation of harmony, linked with flowing rhythms, stands
                  as a symbol of connection. Life’s lessons form a sequence of
                  patterns, ensuring a continuous process of growth. With each
                  turn, a refined structure solidifies the understanding of
                  motion. In the essence of every step, the delicate alignment
                  of balance remains the key.
                </span>
              </p>
            )}
            {activeTab === "shipping" && (
              <p>
                <span className="font-bold text-lg">Returns Policy</span> <br />
                <span>
                  You may return most new, unopened items within 30 days of
                  delivery for a full refund. We'll also pay the return shipping
                  costs if the return is a result of our error (you received an
                  incorrect or defective item, etc.).
                </span>{" "}
                <br /> <br />
                <span>
                  You should expect to receive your refund within four weeks of
                  giving your package to the return shipper, however, in many
                  cases you will receive a refund more quickly. This time period
                  includes the transit time for us to receive your return from
                  the shipper (5 to 10 business days), the time it takes us to
                  process your return once we receive it (3 to 5 business days),
                  and the time it takes your bank to process our refund request
                  (5 to 10 business days).
                </span>{" "}
                <br /> <br />
                <span>
                  If you need to return an item, simply login to your account,
                  view the order using the 'Complete Orders' link under the My
                  Account menu and click the Return Item(s) button. We'll notify
                  you via e-mail of your refund once we've received and
                  processed the returned item.
                </span>{" "}
                <br /> <br />
                <span className="font-bold text-lg">Shipping</span> <br />
                <span>
                  We can ship to virtually any address in the world. Note that
                  there are restrictions on some products, and some products
                  cannot be shipped to international destinations.
                </span>{" "}
                <br /> <br />
                <span>
                  When you place an order, we will estimate shipping and
                  delivery dates for you based on the availability of your items
                  and the shipping options you choose. Depending on the shipping
                  provider you choose, shipping date estimates may appear on the
                  shipping quotes page.
                </span>{" "}
                <br /> <br />
                <span>
                  Please also note that the shipping rates for many items we
                  sell are weight-based. The weight of any such item can be
                  found on its detail page. To reflect the policies of the
                  shipping companies we use, all weights will be rounded up to
                  the next full pound.
                </span>{" "}
                <br /> <br />
              </p>
            )}
            {activeTab === "reviews" && (
              <p>
                Most Recent Review - 06/30/2024 <br /> <br />
                <strong>Jaden:</strong> <br /> Elemental time shapes growth.{" "}
                <br />
                Thick fermentation of hatred and price favors small
                consequences. Rhoncus is a dictumst vestibule that is spread
                out. The time is set in the kiln and the masses are very small.
              </p>
            )}
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-400 font-semibold">
              ✉️ Enquiry about product?
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-center">
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {recommendedProducts.map((product, index) => (
              <div key={index} className="group relative p-4 rounded-lg">
                <img
                  src={product.src}
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                {product.src2 && (
                  <img
                    src={product.src2}
                    alt={product.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-600 group-hover:opacity-100"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-orange-400 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link to={product.link}>
                  <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 bg-orange-300 px-8 py-4 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-black z-20">
                    <span className="relative z-20">Shop Now</span>
                  </button>
                </Link>

                <div className="relative z-10 p-3 text-center">
                  <h3 className="text-lg font-semibold text-gray-200">
                    {product.title}
                  </h3>
                  <p className="text-orange-400 text-lg">{product.title2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DoubleSuit;
