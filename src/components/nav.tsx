import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../img/logo.webp";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function onToggleMenu(e: any) {
    setMenuOpen(!menuOpen);
    const navLinks = document.querySelector(".nav-links-bar");
    if (navLinks) {
      navLinks.classList.toggle("top-[13%]");
    } else {
      console.error("Element not found!");
    }
  }

  return (
    <>
      <div className="flex justify-between items-center w-[92%] mx-auto p-4 z-10">
        {/* 1st box- logo */}
        <div className="flex items-center">
          <img className="w-14 h-14" src={Logo} alt="icon" />
          <h1 className="text-white font-semibold text-[1rem] ml-2">
            AM Preset
          </h1>
        </div>
        {/* 2nd box */}
        <div>
          <div className=" z-10 border border-t-[0px] border-r-[0px] border-l-[0px] border-[#151722] md:border-none text-[#bebebe] nav-links-bar  duration-500 md:static absolute bg-[#0e0f16] py-10 md:py-0 md:min-h-fit min-h-min left-0 top-[-100%] md:w-auto w-full flex item-center px-10">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <HashLink className="hover:text-[#2af598]" smooth to="#About">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="hover:text-[#2af598]"
                  smooth
                  to="#features"
                >
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink className="hover:text-[#2af598]" smooth to="#faqs">
                  Faqs
                </HashLink>
              </li>
              <li>
                <HashLink
                  className="hover:text-[#2af598]"
                  smooth
                  to="#Contact-section"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <div className="md:hidden">
              {!menuOpen ? (
                <FiMenu color="white" fontSize={20} onClick={onToggleMenu} />
              ) : (
                <FiX color="white" fontSize={20} onClick={onToggleMenu} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#151722]"></div>
    </>
  );
}

export default Nav;
