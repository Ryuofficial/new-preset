import Nav from "./components/nav";
import Body from "./components/Body";
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";
import Accordion from "./components/Accordion";
import Features from "./components/Features";

//App version

export default function App() {
  return (
    <div className="font-['Poppins'] h-screen bg-[#13141b] w-screen">
      <header className="bg-[#0e0f16]">
        <section>
          <Nav />
          <Body />
          <Users />
          <About />
          <Features />
          <Accordion />
          <Contact />
        </section>
      </header>
    </div>
  );
}
