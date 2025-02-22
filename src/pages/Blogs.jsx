import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Blogs() {
  return (
    <>
        <div className="text-white min-h-screen">

          <header className="relative w-full h-80 bg-no-repeat bg-[length:100%_100%] bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/detailed-3d-illustration-men39s-fashion-display-with-business-attire-arranged-classic-wooden-hangers-showcased-clean-white-lighting_41097-18792.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10">
              <Nav />
              <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl font-bold">NEWS</h2>
                <h1 className='mt-10'>
                  <Link to="/">
                    <span className='hover:text-orange-300 cursor-pointer'>Home</span>
                  </Link>
                  / Best Selling - Home1
                </h1>
              </div>
            </div>
          </header>

          <Footer />
        </div>
    </>
  )
}

export default Blogs