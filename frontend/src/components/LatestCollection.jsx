import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  console.log(products[0]);

  return <div className=""></div>;
}

export default LatestCollection;
