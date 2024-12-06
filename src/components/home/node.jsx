import Button from "../Button";
import Title from "../Title";

const Banner = () => {
  return (
    <div
      className="pt-24"
      style={{
        backgroundImage: `url('/Bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "900px",
        width: "100%",
      }}
    >
      <div className="max-w-container mx-auto mt-20">
        <Title title="Welcome to Fresh Harvest" />
        <h1 className="py-1 px-4 font-rubik  text-blackColor font-medium text-[80px] w-[680px]" >Fresh Fruits and Vegetables</h1>
       
        <p className="text-greyColor text-[14px] w-[470px]">At Fresh Harvests, we are passionate about providing you with the freshest
        and most flavorful fruits and vegetables</p>

       <div className="mt-8 relative">
       <Button className="bg-primaryColor font-bold ">Shop Now</Button>
         <img src="/Clip.png" className="absolute hidden sm:block left-28  h-[53px]"  />
         <img src="/SpecialOffer.png" className="absolute left-48 "  />
       </div>
       <div className="mt-44 hidden md:block">
            <p className="text-blackColor font-medium font-rubik mb-4">
              Download App:
            </p>
            <div className="flex gap-2">
              <img src="/appstore.png" alt="App Store" className="w-28" />
              <img src="/googleplay.png" alt="Google Play" className="w-28" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
