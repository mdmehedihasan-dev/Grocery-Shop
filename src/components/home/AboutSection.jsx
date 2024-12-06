import Heading from "../Heading";
import Title from "../Title";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 md:p-16 gap-8">
      {/* Left Section: Image */}
      <div className=" w-full md:w-1/2 flex justify-center items-center">
       
          <img
            src="/Image.png" 
            alt="Man holding a box of vegetables"
            className="  object-cover"
          />
        
        {/* <div className="absolute bottom-4 left-10 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center">
            <img
              src="/path-to-logo.jpg" // Replace with your logo path
              alt="Fresh Harvest Logo"
              className="w-8 h-8"
            />
          </div>
          <div>
            <p className="text-sm font-bold">Mushroom</p>
            <p className="text-xs text-gray-500">$2.19 /kg</p>
          </div>
        </div> */}
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full space-y-4 md:w-1/2 text-center md:text-left">
        <Title title={'About us'} />
        <Heading heading={'About Fresh Harvest'} />
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
        </p>
       
          <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white">
          Read More
          </button>
       
      </div>
    </div>
  );
};

export default AboutSection;
