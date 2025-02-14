import { usePresets } from "@/hooks/usePresets";
import { PiYoutubeLogo } from "react-icons/pi";
import { useState } from "react";
import { motion } from "motion/react";
import { useParams, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "./ui/skeleton";
import { directLink } from "./Buttons";
import { copyToClipboard } from "@/lib/utils";
import Page404 from "./Page404";

interface PresetType {
  name: string;
  disabled: boolean;
  onClickType: "xml" | "music" | "direct";
  link: string | undefined;
}

const PresetPage: React.FC = () => {
  const { presets } = usePresets();
  const { toast } = useToast();
  const { prstid } = useParams(); // Get the index from URL params
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const preset = presets.find((p) => p.title === prstid); // Use it as an index

  const location = useLocation();
  const domain = window.location.origin; // Gets the domain (e.g., http://localhost:3000 or https://example.com)
  const pathname = location.pathname; // Gets the path (e.g., /products/shoes)\
  const shareLink: string = domain + "/#" + pathname;

  // Destructure data from the preset object
  const {
    title,
    author,
    img,
    DownloadMusic,
    DownloadXML,
    directAM,
    genre,
    previewPreset,
  } = preset || {};

  //Check if the button is First time clicked
  const [clickStates, setClickStates] = useState({
    xml: false,
    music: false,
    direct: false,
  });

  // Check if XML and Direct link is equal to "0"
  const isHasXML = DownloadXML !== "0";
  const isHasDirect = directAM !== "0";

  const handleDownloadClick = (
    type: "xml" | "music" | "direct",
    actualLink: string
  ) => {
    if (!clickStates[type]) {
      window.open(directLink, "_blank"); // Opens the direct link first
      setClickStates((prev) => ({ ...prev, [type]: true }));
    } else {
      window.open(actualLink, "_blank"); // Opens the actual download link
    }
  };

  //Button Data for the download options
  const buttonData: PresetType[] = [
    {
      name: "Download XML",
      disabled: !isHasXML,
      onClickType: "xml",
      link: DownloadXML,
    },

    {
      name: "Download Music",
      disabled: false,
      onClickType: "music",
      link: DownloadMusic,
    },

    {
      name: "Import Directly",
      disabled: !isHasDirect,
      onClickType: "direct",
      link: directAM,
    },
  ];

  if (!preset) {
    return <Page404 />;
  }

  return (
    <div className="h-screen overflow-auto w-screen flex text-white justify-center items-center">
      <div>
        <div className="h-fit grid grid-cols-1 sm:grid-cols-2 md:max-w-7xl w-screen px-0 md:px-8">
          <div className="w-full p-8">
            <div>
              {/* Image Skeleton */}
              {!isLoaded && !hasError && (
                <Skeleton className="aspect-video w-full rounded-xl  bg-[#13141b]" />
              )}

              {/* Image */}
              {!hasError && (
                <>
                  <div className="aspect-video relative rounded-xl sm:rounded-3xl overflow-hidden">
                    <img
                      className={`object-fill w-full h-auto backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-40  ${
                        isLoaded ? "opacity-70" : "opacity-0"
                      }`}
                      src={img}
                      onLoad={() => setIsLoaded(true)}
                      onError={() => setHasError(true)}
                      alt={title}
                    />
                    {/* Absolute text overlay */}
                    <a
                      href={previewPreset}
                      target="_blank"
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black/40 font-semibold"
                    >
                      <PiYoutubeLogo className="ml-2 text-4xl md:text-5xl text-[#2af598] " />
                    </a>
                  </div>
                </>
              )}

              {/* Fallback UI for Error */}
              {hasError && (
                <div className="aspect-video w-full rounded-xl text-xs sm:text-base md:text-lg bg-[#13141b] flex items-center justify-center text-white/70">
                  Failed to load image
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 bg-slate-900 backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-2">
                {/* Title */}
                <h1 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold bg-gradient-to-r from-[#2af598] to-[#009efd] text-transparent bg-clip-text">
                  {title}
                </h1>
                {/* Genre */}
                <div className="space-x-2 text-[clamp(.7rem,2vw,.9rem)]">
                  <label className="text-white/70" htmlFor="genre-label">
                    Genre:
                  </label>
                  <div
                    id="genre-label"
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-[clamp(.6rem,2vw,.6rem)] font-medium bg-white/10 text-white"
                  >
                    {genre}
                  </div>
                </div>

                {/* Author */}
                <a
                  href={`https://www.tiktok.com/@${author}`}
                  target="_blank"
                  className="flex items-center space-x-2 text-[clamp(.7rem,2vw,.9rem)] cursor-pointer hover:text-[#2af598]"
                >
                  <label className="text-white/70" htmlFor="author-label">
                    Author:
                  </label>
                  <p className="text-[clamp(.7rem,2vw,.5rem)] text-white font-medium">
                    {author}
                  </p>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full p-8 pt-0 md:pt-8">
            <div>
              <h2 className="text-[clamp(1rem,2vw,1.7rem)] font-semibold text-white mb-4">
                Download Options
              </h2>
              <div className="space-y-2 text-[clamp(.7rem,2vw,.9rem)]">
                {/* Download Buttons */}
                {buttonData.map(({ name, disabled, onClickType, link }, id) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + id * 0.1 }} // Staggered delay for tags
                    disabled={disabled}
                    onClick={() =>
                      link && handleDownloadClick(onClickType, link)
                    }
                    className={`download-preset-button ${
                      disabled && "opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {disabled ? "Not Available" : name}
                  </motion.button>
                ))}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + 3 * 0.1 }} // Staggered delay for tags
                  onClick={() => {
                    copyToClipboard(shareLink);
                    toast({
                      description: "Copied! Share it now.",
                    });
                  }}
                  className="download-preset-button"
                >
                  Share Link
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetPage;
