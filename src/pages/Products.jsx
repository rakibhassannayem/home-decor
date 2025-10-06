import useProducts from "../hooks/useProducts";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">All Products</h1>
        <button className="flex items-center gap-1 text-lg hover:scale-105 transition ease-in-out cursor-pointer">
          Search <Search size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
