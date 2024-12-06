import Button from "../Button";
import Title from "../Title";

const Banner = () => {
  return (
    <div
      className="py-5 bg-center bg-cover md:py-24"
      style={{
        backgroundImage: `url('/Bg.png')`,
       
      }}
    >
      <div className="px-4 pt-10 mx-auto mt-10 md:pt-0 max-w-container md:mt-20">
        {/* Title Component */}
        <Title title="Welcome to Fresh Harvest" />

        {/* Main Heading */}
        <h1 className="py-2 font-rubik text-blackColor font-medium text-[32px] md:text-[48px] lg:text-[64px] xl:text-[80px] w-full md:w-[600px] lg:w-[680px] leading-snug">
          Fresh Fruits and Vegetables
        </h1>

        {/* Subheading */}
        <p className="text-greyColor text-sm md:text-base w-full md:w-[470px] mt-4">
          At Fresh Harvest, we are passionate about providing you with the freshest
          and most flavorful fruits and vegetables.
        </p>

        {/* Button Section */}
        <div className="relative mt-6 md:mt-8">
          <Button className="px-6 py-2 text-sm font-bold bg-primaryColor md:text-base">
            Shop Now
          </Button>
          <img
            src="/Clip.png"
            className="absolute hidden sm:block left-16 md:left-28 h-8 md:h-[53px]"
            alt="Clip"
          />
          <img
            src="/SpecialOffer.png"
            className="absolute w-40 pt-5 md:pt-0 left-5 md:left-48 md:w-auto"
            alt="Special Offer"
          />
        </div>

        {/* Download App Section */}
        <div className="mt-32 md:mt-44">
          <p className="mb-4 font-medium text-blackColor font-rubik">Download App:</p>
          <div className="flex gap-2">
            <img src="/appstore.png" alt="App Store" className="w-24 md:w-28" />
            <img src="/googleplay.png" alt="Google Play" className="w-24 md:w-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
