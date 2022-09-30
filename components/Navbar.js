import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-50 ease-in duration-300 bg-[#1F2937] text-white">
      <div className="flex justify-between items-center p-4 text-4xl max-w-[1240px] m-auto">
        <div>
          <h1 className="logo text-5xl">KMH</h1>
        </div>

        {/* Non-mobile Menu */}
        <div className="text-xl">
          <ul className="hidden sm:flex flex-row gap-7">
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div onClick={handleNav} className="sm:hidden z-10">
          {mobileNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div
          className={
            mobileNav
              ? "sm:hidden absolute inset-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center text-3xl text-center ease-in duration-100"
              : "hidden"
          }
        >
          <ul className="flex flex-col items-center text-4xl gap-5 bg-">
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
