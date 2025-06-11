import React from "react";
import { Link} from "react-router-dom"

function Header () {
    return (
          //  <header class="flex justify-evenly shadow-md bg-[#1589EE]">
          //     <Link to="/" class="cursor-pointer p-1 text-white hover:bg-blue-400 hover:rounded=sm">HOME</Link>
          //     <Link to="/Semesters" class="cursor-pointer p-1 text-white hover:bg-blue-400">SEMESTERS</Link>
          //     <Link to="/Advice" class="cursor-pointer p-1 text-white hover:bg-blue-400">ADVICE</Link>
          //  </header>
          

<header className="bg-[#1589EE] shadow-md">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 transition"
        >
          HOME
        </Link>
        <Link
          to="/Years"
          className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 transition"
        >
          YEAR
        </Link>
        <Link
          to="/Advice"
          className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 transition"
        >
          ADVICE
        </Link>
      </div>
    </div>
  </nav>
</header>

    )
     
}

export default Header;