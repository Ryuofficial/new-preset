import React from "react";
import { PresetType } from "./Presets";

const PresetCard = ({
  title,
  author,
  previewPreset,
  img,
  DownloadXML,
  DownloadMusic,
  directAM,
  genre,
}: PresetType) => {
  return (
    <div className="bg-[#0e0f16] p-4 rounded-lg shadow-lg text-white container mx-auto ">
      <img className="object-cover" src={img} alt={title} />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default PresetCard;
