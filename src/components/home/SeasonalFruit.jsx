import Heading from "../Heading";
import Title from "../Title";

const SeasonalFruit = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/Group7.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "640px",
        width: "100%",
      }}
    >
      <div className="mx-auto max-w-container">
        <div className="pt-24 space-y-4 text-center md:text-left">
          <Title title={"Special Offer"} />
          <Heading heading={"Seasonal Fruit Bundle"} />
          <p className="text-xl font-medium md:text-4xl font-rubik text-blackColor">
            Discount up to <span className="text-primaryColor">80% OFF</span>{" "}
          </p>
        </div>
       <div>
       <div className="flex mt-8 gap-x-4 md:gap-x-6">
          <div className=" w-[86px]  md:w-[92px] h-[100px] md:h-[122px] rounded-md flex flex-col items-center justify-center bg-white">
            <p className="text-[40px] font-rubik text-blackColor font-medium">
              03
            </p>
            <span className="text-[18px] font-rubik text-greyColor">Days</span>
          </div>
          <div className=" w-[86px]  md:w-[92px] h-[100px] md:h-[122px] rounded-md flex flex-col items-center justify-center bg-white">
            <p className="text-[40px] font-rubik text-blackColor font-medium">
              18
            </p>
            <span className="text-[18px] font-rubik text-greyColor">Hour</span>
          </div>
          <div className=" w-[86px]  md:w-[92px] h-[100px] md:h-[122px] rounded-md flex flex-col items-center justify-center bg-white">
            <p className="text-[40px] font-rubik text-blackColor font-medium">
              54
            </p>
            <span className="text-[18px] font-rubik text-greyColor">Min</span>
          </div>
          <div className=" w-[86px]  md:w-[92px] h-[100px] md:h-[122px] rounded-md flex flex-col items-center justify-center bg-white">
            <p className="text-[40px] font-rubik text-blackColor font-medium">
              21
            </p>
            <span className="text-[18px] font-rubik text-greyColor">
              Second
            </span>
          </div>
        </div>
        <button className="bg-[#176D38] mt-8 text-white uppercase px-8 py-4 rounded-full text-3xl font-rubik font-semibold"> code :<span className="text-[#FAC714]">FRUIT28</span> </button>
       </div>
      </div>
    </div>
  );
};

export default SeasonalFruit;
