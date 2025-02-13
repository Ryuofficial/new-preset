import { ApkVersion } from "../main";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

export const directLink = import.meta.env.VITE_AM_DIRECT_LINK;

const Buttons = () => {
  const [isStarted, setIsStarted] = useState(false);

  let isDownloading: boolean = false;

  const handleDownloadClick = (): void => {
    if (isDownloading) return;
    isDownloading = true;

    const fileUrl = import.meta.env.BASE_URL + "AM Preset.apk"; // Corrected URL
    const fileName = `AM-Preset [${ApkVersion}] - ${Math.random()
      .toString(36)
      .substring(7)}.apk`;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setIsStarted(true);

    // Improved Redirect (using setTimeout)
    setTimeout(() => {
      window.location.href = directLink;
    }, 3000); // Adjust delay as needed (e.g., 3 seconds)

    setTimeout(() => {
      isDownloading = false;
    }, 2000);
  };

  // const handlePlaystoreClick = () => {
  //   window.open(
  //     "https://www.mediafire.com/file/bfovdfv47kd8zik/AM+Preset+[2.28].apk/file",
  //     "_blank"
  //   );
  // };

  return (
    <div>
      <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
        <div
          className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-[#0e0f16] bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#2af598] to-[#009efd] p-3 md:py-2 md:px-5 rounded-full active:text-[#151722] font-semibold"
          onClick={handleDownloadClick}
        >
          {!isStarted ? "Download App" : <LoadingAnimation />}
        </div>

        <div
          className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-full md:text-sm"
          // onClick={handlePlaystoreClick}
        >
          <Link
            to={"/presets"}
            className="transition-all flex w-full h-full bg-[#0e0f16] text-white rounded-full p-[2px] justify-center items-center active:shadow-pinkShadow active:text-[#2af598]"
          >
            <p className="m-[7px]">View All Preset (Browser)</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
