import Heading from "./Heading";
import Title from "./Title";


const products = [
//   { id: 1, name: "Mushroom", price: "$2.3/kg", image: "/16.png" },
//   { id: 2, name: "Mustard", price: "$1.3/kg", image: "/161.png" },
  { id: 3, name: "Orange", price: "$4.2/kg", image: "/162.png" },
//   { id: 4, name: "Pomegranate", price: "$11.2/kg", image: "/163.png" },
  { id: 5, name: "Kiwi", price: "$5.3/kg", image: "/164.png" },
//   { id: 6, name: "Coconut", price: "$6.3/kg", image: "/165.png" },
  { id: 7, name: "Guava", price: "$2.2/kg", image: "/166.png" },
  { id: 8, name: "Eggplant", price: "$1.2/kg", image: "/167.png" },
];

const RelatedProducts = () => {
  return (
    <section className="py-12">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Title title={"Our Products"} />
          <Heading heading={'Related products'}  />
          <p className="px-0 mb-8 text-greyColor md:px-96">
          We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.          </p>
        </div>

   

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg w-72 h-[360px] shadow-md overflow-hidden p-4 flex flex-col items-center"
            >
             
             <div className="w-64 mb-3 h-[260px] flex justify-center items-center bg-bgImg rounded-lg">
             <img src={product.image} alt={product.name} className="object-contain size-52" />
             </div>
             
              <h3 className="text-lg font-medium text-blackColor">{product.name}</h3>
              <p className="mb-4 text-sm text-greyColor">{product.price}</p>
              <button className="w-full border-2 border-grey50 hover:text-white transition-all ease-in-out duration-300 py-2 font-rubik text-[18px] text-blackColor rounded-md hover:bg-orange-600">
                Add to cart
              </button>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  )
}

export default RelatedProducts