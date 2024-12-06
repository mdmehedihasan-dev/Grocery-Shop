import Heading from "../Heading";
import Title from "../Title";

const blogs = [
  {
    id: 1,
    date: "May 23, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    image: "/image2.png",
    link: "#",
  },
  {
    id: 2,
    date: "May 23, 2024",
    title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    image: "/image3.png",
    link: "#",
  },
  {
    id: 3,
    date: "May 23, 2024",
    title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    image: "/image4.png",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <Title title={'Our Blog'} />
          <Heading heading={'Fresh Harvest Blog'} />
          <p className="text-greyColor px-0 md:px-96 mb-8">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
          </p>
         
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{blog.title}</h3>
                <a
                  href={blog.link}
                  className="text-orange-500 font-medium inline-flex items-center space-x-1 hover:text-orange-600"
                >
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L20.25 12m0 0L13.5 19.5M20.25 12H3.75"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
