import Mockup from "../img/mockUp.webp";
import Buttons from "./Buttons";
import { TypeAnimation } from "react-type-animation";

function hero() {
  return (
    <section>
      <div className="text-center md:max-w-[1200px] p-8 md:p-20  grid grid-cols-1 md:grid-cols-2 md:text-start gap-10">
        <div className="mt-10 ">
          <p className="leading-normal text-[2rem] whitespace-nowrap md:whitespace-wrap md:text-[3rem] font-bold text-white">
            <span className="bg-gradient-to-r from-[#2af598]  to-[#009efd] inline-block text-transparent bg-clip-text">
              AM Preset for
            </span>

            <br />
            <TypeAnimation
              sequence={[
                "Video",
                1000,
                "Text",
                1000,
                "Shake",
                1000,
                "Color",
                1000,
              ]}
              className=""
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </p>
          <div>
            <p className="text-[0.9rem]  md:text-[.9rem] text-[#979696] mt-10">
              Alight Motion Preset is the perfect app for those who want to
              create amazing videos quickly and efficiently.
            </p>
          </div>

          {/* replace with buttons */}
          <Buttons />
        </div>
        <div className="flex justify-center ">
          <img
            src={Mockup}
            alt="something mock-up"
            style={{ width: "240px", height: "370px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default hero;
