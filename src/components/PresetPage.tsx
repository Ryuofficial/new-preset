import { usePresets } from "@/hooks/usePresets";
import { useParams } from "react-router-dom";

const PresetPage = () => {
  const { presets } = usePresets();
  const { prstid } = useParams(); // Get the index from URL params

  const preset = presets.find((p) => p.title === prstid); // Use it as an index

  if (!preset) {
    return (
      <div className="text-xl h-screen w-screen flex text-white justify-center items-center">
        Preset not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pt-16 md:pt-8 px-0 md:px-8 h-screen  flex text-white justify-center items-center bg-slate-400">
      <div>
        <h1 className="text-2xl font-bold">{preset.title}</h1>
        <p>Author: {preset.author}</p>
        <img src={preset.img} alt={preset.title} className="w-48 h-48" />
        <p>Genre: {preset.genre}</p>
      </div>
    </div>
  );
};

export default PresetPage;
