import mockup2 from "../img/mockup-2.webp";

function About() {
  return (
    <>
      <section
        id="About"
        className=" mt-2 p-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-40 justify-center text-white items-center space-y-5"
      >
        <div className="order-2 md:order-1 ">
          <div
            id="box-des"
            className="mx-auto min-w-min max-w-[440px] md:max-w-[450px] mt-4 md:mt-0 bg-[#0a0a0a] h-[300px] rounded-2xl"
          >
            <img
              width={400}
              height={400}
              className=" object-cover w-full h-full rounded-2xl"
              src={mockup2}
              alt="something mockup with screenshot of AM Preset"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div>
            <p className="py-5 md:p-0 text-start  md:text-center font-semibold md:mb-5 text-2xl">
              About the app
            </p>
            <div>
              <p className=" md:p-10 text-start md:text-center text-[0.9rem] mb-6 text-[#979696]">
                AM Preset - the app that makes video editing fast, easy and
                convenient. Our app offers a collection of free presets that you
                can use for your video projects without the need to start from
                scratch. The app offers video presets, shake presets, text
                presets, and color presets with AM link and XML options.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[1px] bg-[#151722] mt-20"></div>
    </>
  );
}

export default About;
