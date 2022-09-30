import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-[#1F2937] text-white">
      <div className="flex justify-between items-center p-4">
        <div>
          <h1>KMH</h1>
        </div>

        <AiOutlineMenu />
        
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
