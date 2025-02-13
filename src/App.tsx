import Nav from "./components/nav";
import Body from "./components/Body";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import Accordion from "./components/Accordion";
import Presets from "./components/Presets";
import Features from "./components/Features";
import { Routes, Route } from "react-router-dom";
import NavPreset from "./components/NavPreset";
import PresetPage from "./components/PresetPage";
import Page404 from "./components/Page404";
import Disclaimer from "./components/Disclaimer";

export default function App() {
  return (
    <div className="font-['Poppins'] h-screen bg-[#13141b] w-screen">
      <header className="bg-[#0e0f16]">
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Body />
                  <Users />
                  <About />
                  <Features />
                  <Accordion />
                  <Contact />
                </>
              }
            />

            <Route
              path="/presets"
              element={
                <>
                  <NavPreset isCardPage={true} />
                  <Presets />
                </>
              }
            />

            <Route
              path="/presets/:prstid"
              element={
                <>
                  <NavPreset isCardPage={false} />
                  <PresetPage />
                </>
              }
            />

            <Route
              path="/disclaimer"
              element={
                <>
                  <NavPreset isCardPage={true} />
                  <Disclaimer />
                </>
              }
            />

            <Route
              path="*"
              element={
                <>
                  <NavPreset isCardPage={true} />
                  <Page404 />
                </>
              }
            />
          </Routes>
        </section>
      </header>
    </div>
  );
}
