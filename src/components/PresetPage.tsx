import { usePresets } from "@/hooks/usePresets";
import { useParams } from "react-router-dom";

const PresetPage = () => {
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

  return (
    <div className="h-screen w-screen  flex text-white justify-center items-center  ">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-7xl pt-16 md:pt-8 h-screen w-screen px-0 md:px-8 ">
          <div className="w-full p-8">
            <div>
              <img
                className="rounded-xl backdrop-blur-xl bg-white/5   border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                src={preset.img}
                alt={preset.title}
              />
            </div>
            <div className="mt-4 bg-slate-900  backdrop-blur-xl bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="space-y-2">
                {/* Title */}
                <h1 className="text-2xl font-bold  bg-gradient-to-r from-[#2af598]  to-[#009efd] text-transparent bg-clip-text">
                  {preset.title}
                </h1>
                {/* Genre */}
                <div className="space-x-2">
                  <label className="text-white/70" htmlFor="genre-label">
                    Genre:
                  </label>
                  <div
                    id="genre-label"
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs font-medium bg-white/10 text-white"
                  >
                    {preset.genre}
                  </div>
                </div>
                {/* Author */}
                <div className="flex items-center space-x-2">
                  <label className="text-white/70" htmlFor="author-label">
                    Author:
                  </label>
                  <p className="text-sm text-white  font-medium ">
                    {preset.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-400 w-full">right side</div>
        </div>
      </div>
    </div>
  );
};

export default PresetPage;
