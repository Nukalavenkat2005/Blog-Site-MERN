import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-8 relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt ="lama logo" w={32} h ={32}/>
        <span>VBlog</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </div>

        {/* Menu Overlay */}
        <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/" className="text-white text-2xl my-4">Home</Link>
          <Link to="/" className="text-white text-2xl my-4">Trending</Link>
          <Link to="/" className="text-white text-2xl my-4">Most Popular</Link>
          <Link to="/" className="text-white text-2xl my-4">About</Link>
          <Link to="/" className="text-white text-2xl my-4">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
