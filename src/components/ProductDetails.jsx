import { useState } from "react";
import Title from "./Title";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="px-4 pt-24 mx-auto rounded-lg lg:pt-48 max-w-container">
      {/* Image and Details Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full mb-4 lg:w-1/2">
          <img
            src="ImageSlider.png"
            alt="Coconut"
            className="object-cover w-full rounded lg:h-[566px]"
          />
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {/* Category and Title */}
            <Title title={"Fruits"} />
            <Heading heading={"Coconut"} />

            {/* Rating */}
            <div className="flex items-center mt-1 mb-4">
              <span className="text-lg text-yellow-500">★★★★★</span>
              <span className="ml-1 font-medium text-blackColor">5.0</span>
              <span className="ml-2 text-sm font-medium text-blackColor">
                (1 review)
              </span>
            </div>
          </div>

          {/* Price */}
          <p className="mt-4 text-lg font-semibold font-rubik text-primaryColor">
            $6.3/kg
          </p>

          {/* Description */}
          <p className="mt-4 text-base text-blackColor">
            From our farm directly to your door, our fresh coconuts are
            harvested at the peak of ripeness, offering you a sweet, hydrating
            treat full of flavor.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <span className="mr-2 text-base font-medium text-blackColor">
              Quantity
            </span>
            <button
              onClick={handleDecrease}
              className="px-4 py-2 border-2 rounded-l border-grey50 text-blackColor"
            >
              -
            </button>
            <span className="px-4 py-2 border-t border-b text-blackColor">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="px-4 py-2 border-2 rounded-r border-grey50 text-blackColor"
            >
              +
            </button>
            <span className="ml-2 text-blackColor">/kg</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-6 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center px-4 py-2 rounded bg-bgImg gap-x-3">
              <FaHeart className="text-grey50 size-6" />
              <p className="font-medium text-greyColor font-rubik">
                Save as favorite
              </p>
            </button>
            <button className="flex items-center px-4 py-2 text-white bg-orange-500 rounded gap-x-3 hover:bg-orange-600">
              <FaShoppingCart />
              <p className="font-medium font-rubik"> Add to cart</p>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6">
        <div className="flex flex-wrap space-x-6">
          <button className="px-4 py-2 text-white border-2 rounded-md bg-greenColor">
            Description
          </button>
          <button className="px-4 py-2 bg-transparent border-2 rounded-md hover:text-white text-grey80 border-grey50 hover:bg-greenColor">
            Review
          </button>
        </div>
        <div className="mt-6 rounded-md mb-28 bg-bgImg">
          <p className="px-6 py-8 text-sm text-grey20 lg:px-8 lg:py-10">
            Our coconuts are sustainably grown, ensuring the best quality and
            taste. Each coconut is handpicked and carefully prepared, offering
            you the freshest product possible. Rich in healthy fats,
            electrolytes, and essential nutrients, coconuts provide both
            hydration and nourishment. Whether you’re using the water, flesh,
            or milk, our coconuts bring versatility to your kitchen while
            supporting healthy living.
            <br />
            <br />
            Perfect for smoothies, desserts, curries, and more — let the
            natural sweetness of the coconut elevate your recipes. Enjoy the
            tropical goodness in its purest form, directly from nature.
          </p>
        </div>
      </div>
      <RelatedProducts/>
    </div>
  );
};

export default ProductDetails;
