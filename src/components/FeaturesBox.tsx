function FeaturesBox(props) {
  return (
    <div className="py-10 px-7 flex flex-col justify-center items-center space-y-2">
      <div>
        <img
          src={props.myIcon}
          alt={props.altText}
          // width={45}
          // height={45}
          className=" w-[45px] h-[45px]"
        />
      </div>
      <p className=" text-center text-[1.35rem] font-[600]  text-white">
        {props.title}
      </p>
      <p className=" text-[0.9rem] md:text-base text-center text-[#979696] md:px-10">
        {props.desc}
      </p>
    </div>
  );
}

export default FeaturesBox;
