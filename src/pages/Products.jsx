import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          All Products{" "}
          <span className="text-sm text-gray-500 font-medium">
            ({searchedProducts.length}) products found
          </span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchedProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
