import { PresetType } from "./Presets";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IoPersonSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const PresetCard = ({ title, author, img, genre }: PresetType) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <div className="rounded-lg border text-card-foreground shadow-sm group overflow-hidden transition-all duration-300 hover:shadow-lg max-w-sm w-full backdrop-blur-xl bg-[#0e0f16] border-white/10">
        {!isLoaded && !hasError && (
          <Skeleton className="aspect-video w-72 h-40 bg-[#13141b]" />
        )}

        {!hasError && (
          <img
            src={img}
            alt={`${title} image`}
            className={`w-72 h-40 aspect-video object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-70" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}

        <div className="p-4 ">
          {/* Genre */}
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  text-xs font-medium bg-white/10 text-white/70">
            {genre}
          </div>

          <div className="space-y-[6px] mt-3 mb-6">
            {/* Title */}
            <h3 className="font-semibold text-[clamp(1rem,2vw,1.2rem)] leading-tight tracking-tight bg-gradient-to-r from-[#2af598]  to-[#009efd] text-transparent bg-clip-text">
              {title}
            </h3>

            {/* Author */}

            <div className="flex items-center space-x-2  text-white/70 ">
              <IoPersonSharp fontSize={12} />
              <p className=" font-light text-[clamp(.8rem,2vw,.8rem)]">
                {author}
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            to={`/presets/${title}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white/70 h-10 px-4 py-2 w-full group/button transition-all bg-white/10 hover:bg-white/20 "
          >
            Check Preset
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        {/* <a href={previewPreset}>Preview Preset</a>
      <a href={DownloadXML} target="_blank">
        Download XML
      </a>
      <a href={DownloadMusic} target="_blank">
        Download Music
      </a>

      <a href={directAM} target="_blank">
        Import Directly
      </a> */}
      </div>
    </>
  );
};

export default PresetCard;
