import { usePresets } from "@/hooks/usePresets";
import { useParams } from "react-router-dom";

const PresetPage = () => {
  const { presets } = usePresets();
  const { prstid } = useParams(); // Get the index from URL params

  const preset = presets.find((p) => p.title === prstid); // Use it as an index

  if (!preset) {
    return (
      <div className="h-screen w-screen flex text-white justify-center items-center">
        Preset not found.
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex text-white justify-center items-center">
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
