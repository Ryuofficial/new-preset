import { useEffect, useState } from "react";
import PresetCard from "./PresetCard";

export interface PresetType {
  title: string;
  author: string;
  previewPreset: string;
  img: string;
  DownloadMusic: string;
  DownloadXML: string;
  directAM: string;
  genre: string;
}

const Presets = () => {
  const [presets, setPresets] = useState<PresetType[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RyuDevGFX/AMpreset/refs/heads/main/data.json"
    )
      .then((response) => response.json())
      .then((data) => setPresets(data));
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center overflow-auto justify-center h-screen bg-[#13141b] w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:grid-cols-5">
          {presets && presets.length === 0 && (
            <div className="text-white">Loading...</div>
          )}
          {presets.map(
            (
              {
                title,
                author,
                previewPreset,
                img,
                DownloadXML,
                DownloadMusic,
                directAM,
                genre,
              },
              id
            ) => (
              <PresetCard
                key={id}
                title={title}
                author={author}
                previewPreset={previewPreset}
                img={img}
                DownloadXML={DownloadXML}
                DownloadMusic={DownloadMusic}
                directAM={directAM}
                genre={genre}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Presets;
