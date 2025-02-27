import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

import BrandedSuits from "./pages/BrandedSuits";
import FabulousSuits from "./pages/FabulousSuits";
import CustomMade from "./pages/CustomMade";
import BreathableSuit from "./pages/BreathableSuit";
import Blogs from "./pages/Blogs";

import PartySuit from "./suits/PartySuit";
import SlimSuit from "./suits/SlimSuit";
import SimpleSuit from "./suits/SimpleSuit";
import DoubleSuit from "./suits/DoubleSuit";
import UniqueSuit from "./suits/UniqueSuit";
import ElegantSuit from "./suits/ElegantSuit";
import TwidSuit from "./suits/TwidSuit";
import BreastedSuit from "./suits/BreastedSuit";
import CottonTwill from "./suits/CottonTwill";
import DoubleColor from "./suits/DoubleColor";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Footer />
              </>
            }
          />
          <Route path="/branded-suits" element={<BrandedSuits />} />
          <Route path="/fabulous-suits" element={<FabulousSuits />} />
          <Route path="/custom-made" element={<CustomMade />} />
          <Route path="/breathable-suits" element={<BreathableSuit />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          

          <Route
            path="/fabulous-suits/party-wear-blazer"
            element={<PartySuit />}
          />
          <Route
            path="/fabulous-suits/double-breasted-blazer"
            element={<BreastedSuit />}
          />
          <Route
            path="/fabulous-suits/slim-fit-blazer"
            element={<SlimSuit />}
          />
          <Route
            path="/fabulous-suits/slim-formal-blazer"
            element={<SimpleSuit />}
          />
          <Route
            path="/fabulous-suits/unique-silk-blazer"
            element={<UniqueSuit />}
          />
          <Route
            path="/fabulous-suits/elegant-suit-6"
            element={<ElegantSuit />}
          />
          <Route
            path="/fabulous-suits/tweed-formal-blazer"
            element={<TwidSuit />}
          />
          <Route
            path="/branded-suits/cotton-twill-blazer"
            element={<CottonTwill />}
          />
          <Route
            path="/branded-suits/double-color-blazer"
            element={<DoubleColor />}
          />
          <Route
            path="/branded-suits/double-color-solid-blazer"
            element={<DoubleSuit />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
