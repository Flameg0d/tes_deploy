import React,{useRef} from "react";
import { Link } from "react-router-dom";
 import GambarLogo from './assets/maknakarya.png';

const Navbar = () => {
   
  return (
  <section>
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-300 text-white z-50">
        <div className="flex items-center">
          <img src={GambarLogo} alt="Logo" />
        </div>

        <div className="flex space-x-4">

          <Link to="/" className="text-xl text-black hover:text-gray-500"
            onClick={() => window.scrollTo(0, 0)}
          >Home</Link>

          <Link to="/news" className="text-xl text-black hover:text-gray-500"
             onClick={() => window.scrollTo(0, 0)}
          >News</Link>      
           
      </div>
      </nav>
    </section>
  );
};

export default Navbar;
