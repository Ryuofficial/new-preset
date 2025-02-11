import { FiMenu, FiX } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { useState } from "react";
import Logo from "../img/logo.webp";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center w-[92%] mx-auto p-4">
        {/* 1st box- logo */}
        <div className="flex items-center">
          <img className="w-14 h-14" src={Logo} alt="icon" />
          <h1 className="text-white font-semibold text-[1rem] ml-2">
            AM Preset
          </h1>
        </div>
        {/* 2nd box */}
        <div>
          <div className="  text-[#bebebe]">
            <Link className="hover:text-[#2af598] flex items-center" to={"/"}>
              <GoHomeFill className="mr-3 text-xl " />

              <p className="hidden sm:block">Go Home</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#151722]"></div>
    </>
  );
}

export default Nav;
