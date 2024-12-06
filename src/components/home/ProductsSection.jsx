import { useState } from "react";

// Product List
const products = [
  { id: 1, name: "Mushroom", price: "$2.3/kg", image: "/16.png", category: "Vegetables" },
  { id: 2, name: "Mustard", price: "$1.3/kg", image: "/161.png", category: "Vegetables" },
  { id: 3, name: "Orange", price: "$4.2/kg", image: "/162.png", category: "Fruits" },
  { id: 4, name: "Pomegranate", price: "$11.2/kg", image: "/163.png", category: "Fruits" },
  { id: 5, name: "Kiwi", price: "$5.3/kg", image: "/164.png", category: "Fruits" },
  { id: 6, name: "Coconut", price: "$6.3/kg", image: "/165.png", category: "Fruits" },
  { id: 7, name: "Guava", price: "$2.2/kg", image: "/166.png", category: "Fruits" },
  { id: 8, name: "Eggplant", price: "$1.2/kg", image: "/167.png", category: "Vegetables" },
];

const ProductsSection = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Number of products to show
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category filter

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Handle "View More" functionality
  const viewMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="relative py-12">
      {/* Background Images */}
      <img className="hidden md:block" src="/Clippathgroup.png" alt="" />
      <img className="absolute left-1 md:left-48 top-10 md:top-40" src="/Clippath.png" alt="" />
      <img className="absolute top-0 right-2 md:right-48 md:top-40" src="/Group.png" alt="" />

      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-xl font-bold">Our Products</h2>
          <h1 className="text-3xl font-bold">Our Fresh Products</h1>
          <p className="px-0 mb-8 text-gray-600 md:px-96">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mt-4 mb-8 space-x-2 md:space-x-4">
          {["All", "Fruits", "Vegetables", "Salad"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 transition-all duration-300 ease-in-out border-2 rounded-md md:px-6 ${
                selectedCategory === category
                  ? "bg-greenColor text-white"
                  : "text-gray-600 border-gray-600 hover:bg-greenColor hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg w-72 h-[360px] shadow-md overflow-hidden p-4 flex flex-col items-center"
            >
              <div className="w-64 mb-3 h-[260px] flex justify-center items-center bg-gray-100 rounded-lg">
                <img src={product.image} alt={product.name} className="object-contain h-full" />
              </div>
              <h3 className="text-lg font-medium text-black">{product.name}</h3>
              <p className="mb-4 text-sm text-gray-600">{product.price}</p>
              <button
                className="w-full py-2 text-black transition-all duration-300 ease-in-out border-2 border-gray-400 rounded-md hover:text-white hover:bg-orange-600"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>

        {/* "View More" Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="mt-8 text-center">
            <button
              onClick={viewMoreProducts}
              className="px-6 py-2 text-orange-500 border-2 border-orange-500 rounded-md hover:bg-orange-500 hover:text-white"
            >
              View More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
