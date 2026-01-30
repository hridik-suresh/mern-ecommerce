import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Only take 10 products, ensuring we don't crash if products is undefined
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="my-10 px-4 sm:px-0">
      {" "}
      {/* Added horizontal padding for mobile mobile */}
      {/* Header Section */}
      <div className="text-center py-8">
        <div className="text-2xl sm:text-3xl lg:text-4xl">
          {" "}
          {/* Scalable Title Size */}
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </div>
        <p className="w-full sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2">
          Explore our newest arrivals, crafted with premium materials and
          designed to keep you ahead of the fashion curve.
        </p>
      </div>
      {/* Responsive Grid System */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 gap-y-8">
        {latestProducts.map((item, index) => (
          <div key={item._id || index} className="animate-fadeIn">
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
      {/* Empty State (Optional but good for UX) */}
      {latestProducts.length === 0 && (
        <p className="text-center text-gray-400 py-10">
          Loading latest products...
        </p>
      )}
    </div>
  );
}

export default LatestCollection;
