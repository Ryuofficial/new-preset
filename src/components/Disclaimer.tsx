const Disclaimer = () => {
  return (
    <div className="h-screen w-screen text-white flex justify-center md:items-center overflow-auto p-8">
      <div className="max-w-4xl w-full h-full">
        <h2 className="text-[clamp(2rem,2vw,2.25rem)] font-bold text-white-800 mb-6 text-[#2af598]">
          Notice
        </h2>
        <h3 className="text-[clamp(1.2rem,2vw,1.25rem)] font-semibold text-white-800 mt-4">
          Content Policy
        </h3>
        <p className="text-[clamp(.8rem,2vw,1rem)]  text-gray-300/80 mb-10 md:mb-8 mt-2">
          Alight-Motion-Preset.com is a platform that shares presets created by
          users for the Alight Motion app. We do not own or create these
          presets; they are provided for sharing and inspiration within the
          community.
        </p>
        <h3 className="text-[clamp(1.2rem,2vw,1.25rem)] font-semibold text-white mt-4">
          Not Affiliated with Alight Motion
        </h3>
        <p className="text-[clamp(.8rem,2vw,1rem)] text-gray-300/80 mb-10 md:mb-8 mt-2 ">
          Alight-Motion-Preset.com is{" "}
          <span className="font-semibold text-white/90">not</span> affiliated
          with the official{" "}
          <span className="font-semibold text-white/90">Alight Motion</span>{" "}
          app.
        </p>
        <h3 className="text-[clamp(1.2rem,2vw,1.25rem)] font-semibold text-white-800 mt-4">
          Intellectual Property Rights
        </h3>
        <p className="text-[clamp(.8rem,2vw,1rem)] text-gray-300/80 mb-10 md:mb-8  mt-2">
          If you are the creator of a preset and want it removed, please{" "}
          <span className="font-semibold">contact us</span>, and we will take it
          down immediately. We{" "}
          <span className="font-semibold text-white/90">
            respect all intellectual property rights
          </span>{" "}
          and follow{" "}
          <span className="font-semibold text-white/90">fair use</span>{" "}
          guidelines.
        </p>
        <h3 className="text-[clamp(1.2rem,2vw,1.25rem)] font-semibold text-white-800 mt-4">
          Limitation of Liability
        </h3>
        <p className="text-[clamp(.8rem,2vw,1rem)] text-gray-300/80 mb-10 md:mb-8  mt-2">
          We are not responsible for any issues, damages, or losses resulting
          from the use of any presets on this site. Use them at your own risk.
        </p>
        <h3 className="text-[clamp(1.2rem,2vw,1.25rem)] font-semibold text-white-800 mt-4">
          Contact Us
        </h3>
        <p className="text-[clamp(.8rem,2vw,1rem)] mb-10 md:mb-8  text-gray-300/80 mt-2">
          If you have any concerns regarding the content on this site, feel free
          to reach out to us. We take all requests seriously and will act
          accordingly.
        </p>
        &nbsp;
      </div>
    </div>
  );
};

export default Disclaimer;
