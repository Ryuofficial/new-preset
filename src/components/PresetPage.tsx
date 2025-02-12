import { usePresets } from "@/hooks/usePresets";
import { dir } from "node:console";
import React from "react";
import { useParams } from "react-router-dom";

const PresetPage: React.FC = () => {
  const { presets } = usePresets();
  const { prstid } = useParams(); // Get the index from URL params

  const preset = presets.find((p) => p.title === prstid); // Use it as an index

  if (!preset) {
    return (
      <div className="text-xl h-screen w-screen flex text-white justify-center items-center ">
        Preset not found.
      </div>
    );
  }

  const { title, author, img, DownloadMusic, DownloadXML, directAM, genre } =
    preset;

  return (
    <div className="h-screen overflow-auto w-screen  flex text-white justify-center items-center  ">
      <div>
        <div className="h-fit grid grid-cols-1 sm:grid-cols-2 md:max-w-7xl  w-screen px-0 md:px-8 ">
          <div className="w-full p-8">
            <div>
              <img
                className="rounded-xl backdrop-blur-xl bg-white/5   border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                src={img}
                alt={title}
              />
            </div>
            <div className="mt-4 bg-slate-900  backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-2">
                {/* Title */}
                <h1 className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold  bg-gradient-to-r from-[#2af598]  to-[#009efd] text-transparent bg-clip-text">
                  {title}
                </h1>
                {/* Genre */}
                <div className="space-x-2 text-[clamp(.7rem,2vw,.9rem)] ">
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
                <div className="flex items-center space-x-2 text-[clamp(.7rem,2vw,.9rem)] ">
                  <label className="text-white/70" htmlFor="author-label">
                    Author:
                  </label>
                  <p className="text-[clamp(.7rem,2vw,.5rem)] text-white  font-medium ">
                    {author}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-8 pt-0 md:pt-8">
            <div>
              <h2 className="text-[clamp(1rem,2vw,1.7rem)] font-semibold text-white mb-4">
                Download Options
              </h2>

              <div className="space-y-2 text-[clamp(.7rem,2vw,.9rem)] ">
                <a
                  href={DownloadXML}
                  target="_blank"
                  className="download-preset-button"
                >
                  Download XML
                </a>
                <a
                  href={DownloadMusic}
                  target="_blank"
                  className="download-preset-button"
                >
                  Download Music
                </a>
                <a
                  href={directAM}
                  target="_blank"
                  className="download-preset-button"
                >
                  Import Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresetPage;
