import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("./furnitureData.json").then((data) => console.log(data));
  }, []);
  return { products, loading, error };
};

export default useProducts;
