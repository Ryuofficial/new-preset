import FeaturesBox from "./FeaturesBox";
import CreatorIMG from "../img/creator.webp";
import EasyIMG from "../img/easy.webp";
import PackIMG from "../img/pack.webp";

const FeatureBoxData = [
  {
    Title: "Preset Creator",
    desc: "Follow your favorite creator's preset.",
    altText: "safe and free something",
    myKey: "734d035a-90b6-11ee-b9d1-0242ac120002",
    icon: CreatorIMG,
  },
  {
    Title: "Easy to use",
    desc: " Easy to use! No signup required. 100% free.",
    altText: "Restore something",
    myKey: "79aaeac8-90b6-11ee-b9d1-0242ac120002",
    icon: EasyIMG,
  },
  {
    Title: "3 in 1",
    desc: "3-in-1 preset pack! Includes the XML, AM link, and audio.",
    altText: "History something",
    myKey: "7ff51ebc-90b6-11ee-b9d1-0242ac120002",
    icon: PackIMG,
  },
];

function Features() {
  return (
    <section className="py-14" id="features">
      {/* Title and desc */}
      <div className="text-white mb-16 mt-3">
        <p className=" text-center font-semibold mb-[8px] text-2xl">
          Special Features
        </p>

        <p className=" text-center text-sm text-[#979696]">
          AM Preset features
        </p>
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-3 px-5 md:px-10">
        {FeatureBoxData.map((data) => {
          return (
            <FeaturesBox
              key={data.myKey}
              title={data.Title}
              desc={data.desc}
              myIcon={data.icon}
              altText={data.altText}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Features;
