import { HashRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { PresetsProvider } from "@/hooks/usePresets";
import "./index.css";
import App from "./App.tsx";

export const ApkVersion = (2.28).toFixed(2);

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <PresetsProvider>
      <App />
    </PresetsProvider>
    <Toaster />
  </HashRouter>
);
