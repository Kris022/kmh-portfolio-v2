import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-50 ease-in duration-300 bg-[#1F2937] text-white">
      <div className="flex justify-between items-center p-4 text-4xl">
        <div>
          <h1 className="logo">KMH</h1>
        </div>

        <div onClick={handleNav}>
          {mobileNav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Non-mobile Menu */}
        <div className="hidden">
          <ul>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden">
        <ul>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
}
