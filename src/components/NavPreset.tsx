import { GoHomeFill } from "react-icons/go";
import { RiArrowGoBackFill } from "react-icons/ri";
import Logo from "../img/logo.webp";
import { Link } from "react-router-dom";

type NavProps = {
  isCardPage: boolean;
};

function Nav({ isCardPage }: NavProps) {
  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-4 z-10">
        {/* 1st box- logo */}
        <div className="flex items-center">
          <img className="w-14 h-14" src={Logo} alt="icon" />
          <h1 className="text-white font-semibold text-[1rem] ml-2">
            AM Preset
          </h1>
        </div>
        {/* 2nd box */}
        <div>
          <div className="text-[#bebebe]">
            {isCardPage ? (
              <Link className="hover:text-[#2af598] flex items-center" to={"/"}>
                <GoHomeFill className="md:mr-3 text-xl " />
                <p className="hidden sm:block">Go Home</p>
              </Link>
            ) : (
              <Link
                className="hover:text-[#2af598] flex items-center"
                to={"/presets"}
              >
                <RiArrowGoBackFill className="mr-2 md:mr-3 text-base " />
                <p className=" text-[clamp(.8rem,2vw,1rem)]">Go Back</p>
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className="h-[1px] bg-[#151722]"></div>
    </>
  );
}

export default Nav;
