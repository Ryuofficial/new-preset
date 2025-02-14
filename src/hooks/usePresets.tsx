import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

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
const KEY = import.meta.env.VITE_API_KEY;

interface PresetsContextType {
  presets: PresetType[];
  loading: boolean;
}

const PresetsContext = createContext<PresetsContextType>({
  presets: [],
  loading: true,
});

export const PresetsProvider = ({ children }: { children: ReactNode }) => {
  const [presets, setPresets] = useState<PresetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresets = async () => {
      try {
        const response = await fetch(CONFIG_URL, {
          headers: {
            "X-API-KEY": KEY,
          },
        });
        const data = await response.json();
        setPresets(data);
      } catch (error) {
        console.error("Error fetching presets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPresets();
  }, []);

  return (
    <PresetsContext.Provider value={{ presets, loading }}>
      {children}
    </PresetsContext.Provider>
  );
};

export const usePresets = () => {
  return useContext(PresetsContext);
};
