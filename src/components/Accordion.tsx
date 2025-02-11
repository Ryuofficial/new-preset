import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [open, setOpen] = useState(false);
  const Toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "How to use the Alight motion Preset App?",
      desc: "Open the app > Choose your desire preset > Choose between XML or AM link >  Download the Audio from the app > import the preset in the Alight Motion",
    },

    {
      title: "Is it free to use?",
      desc: "Yes is 100% free to use! No need to worry about the payment. You can use the app as long as you can.",
    },

    {
      title: "How to Download Audio from the app?",
      desc: "You simply click 'Download Audio,' then you will be redirected to a website with a 'Download' button. Click it, and the audio will download automatically",
    },
  ];

  return (
    <section id="faqs">
      <div className="h-[1px] bg-[#151722]"></div>
      <div className="m-[10px] p-5 md:p-24 text-white mt-16 mb-24">
        <div className="">
          <p className=" text-center md:text-start font-semibold mb-[8px] text-xl md:text-2xl ">
            Frequently Asked Questions
          </p>
          <p className=" text-center md:text-start  text-sm mb-14 text-[#979696] text-l">
            Need help? How can we help you?
          </p>

          <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 justify-self-auto">
            {/* return a text and desc */}
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  Link={data.Link}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  titleLink={data.titleLink}
                  toggle={() => Toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
