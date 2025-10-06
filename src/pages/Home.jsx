import { Link, useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { MoveRight } from "lucide-react";

const Home = () => {
  const products = useLoaderData();
  const featuredProducts = products.slice(0, 6);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <Link to={"/products"} className="flex items-center gap-1 text-lg hover:scale-105 transition ease-in-out">
          See All Products <MoveRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
