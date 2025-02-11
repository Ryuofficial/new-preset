import { ApkVersion } from "../main";
import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

const Buttons = () => {
  const [isStarted, setIsStarted] = useState(false);
  let isDownloading = false;
  const handleDownloadClick = () => {
    if (isDownloading) return; // If download is in progress, don't start another
    isDownloading = true; // Set flag to indicate download is in progress

    const fileUrl = process.env.PUBLIC_URL + "/AM Preset.apk";
    const fileName = `AM-Preset [${ApkVersion}] - ${Math.random()
      .toString(36)
      .substring(7)}.apk`;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
    window.location.href = "https://dolatiaschan.com/4/7719224";
    setIsStarted(true);
    // Delay setting isDownloading to false to ensure the download completes before allowing another
    setTimeout(() => {
      isDownloading = false;
    }, 2000);
  };

  const handlePlaystoreClick = () => {
    window.open(
      "https://www.mediafire.com/file/bfovdfv47kd8zik/AM+Preset+[2.28].apk/file",
      "_blank"
    );
  };

  return (
    <div>
      <div className="p-2 md:p-0 mt-[3rem] md:mt-[2rem] space-y-3 md:space-y-0 md:space-x-3 grid justify-center grid-cols-1 md:grid-cols-2">
        {/* Direct Download now button */}
        <div
          className="transition-all flex justify-center items-center whitespace-nowrap text-[0.7rem] text-[#0e0f16] bg-gradient-to-r md:text-sm shadow-pinkShadow from-[#2af598] to-[#009efd] p-3 md:py-2 md:px-5 rounded-full active:text-[#151722] font-semibold"
          onClick={handleDownloadClick}
        >
          {!isStarted ? "Download Now" : <LoadingAnimation />}
        </div>

        {/* Mediafire Download Button */}
        <div
          className="whitespace-nowrap text-[0.7rem] text-white p-[2px] bg-gradient-to-r from-[#2af598] to-[#009efd] rounded-full md:text-sm"
          onClick={handlePlaystoreClick}
        >
          <span className="transition-all flex w-full h-full bg-[#0e0f16] text-white rounded-full p-[2px] justify-center items-center  active:shadow-pinkShadow active:text-[#2af598]">
            <button className="m-[7px]">Alternative download</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
