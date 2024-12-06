import Heading from "../Heading";
import Title from "../Title";

const CustomerTestimonial = () => {
  return (
    <div className="flex flex-col items-center bg-white p-8 md:p-16 gap-8">
      {/* Heading Section */}
      <div className="text-center space-y-4">
          <Title title={"Testimonial"} />
          <Heading heading={'What Our Customers Say'}  />
          <p className="text-greyColor px-0 md:px-96 mb-8">
          Don’t just take our word for it—here’s what some of our customers have to say about their experience with Fresh Harvest:
          </p>
        </div>
    

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
        <div className="flex-shrink-0">
            <img
              src="/Rectangle3.png" 
              alt="Customer portrait"
              className=" object-cover"
            />
          
        </div>
        <div className="bg-gray-100 p-6 rounded-lg flex flex-col gap-4">
          <p className="text-greyColor italic">
            &ldquo;I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
          </p>
          <p className="text-blackColor font-bold">Jane Doe - <span className="font-normal">Professional chef</span> </p>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
