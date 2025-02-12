import { useEffect, useState } from "react";

export interface PresetType {
  title: string;
  author: string;
  previewPreset: string;
  img: string;
  DownloadMusic: string;
  DownloadXML: string;
  directAM: string;
  genre: string;
  id: number;
}

const CONFIG_URL = import.meta.env.VITE_CONFIG_URL;

export const usePresets = () => {
  const [presets, setPresets] = useState<PresetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(CONFIG_URL)
      .then((response) => response.json())
      .then((data) => {
        setPresets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { presets, loading };
};
