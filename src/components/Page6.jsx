import React from "react";
import { Link } from "react-router";

function Page6() {
  const blogs = [
    {
      id: 1,
      image: "/public/img13.webp",
      date: "Aug 2025",
      title: "Classic Suits That Fits For Your Party",
      link: "#",
    },
    {
      id: 2,
      image: "/public/img12.webp",
      date: "Aug 2025",
      title: "Elegant Suit Look For Your Office Meet",
      link: "#",
    },
  ];

  return (
    <div className="h-[90vh] text-white py-12 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Blog Cards */}
        <div className="flex gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative w-80">
              <img src={blog.image} alt={blog.title} className=" h-[400px]" />
              <div className="absolute -bottom-[20%] bg-white p-4 w-[90%] left-[55%] transform -translate-x-1/2 rounded-md shadow-lg hover:bg-orange-200 duration-500">
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <h3 className="text-lg text-black font-semibold">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="text-sm text-gray-600 mt-2 block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Info Section */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">RECENT BLOGS</h2>
          <p className="text-gray-300 mb-6">
            Now is the time to take action. Develop skills, stay focused, and
            move forward. Challenges may come, but persistence leads to success
          </p>
          <Link to="blogs">
            <button className="relative cursor-pointer mt-10 text-black overflow-hidden bg-orange-200 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
              <span className="relative z-10">See Our Blogs</span>
              <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page6;
