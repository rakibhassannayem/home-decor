import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";
import { addToWishlist } from "../utils/localStorage";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const product = products.find((p) => p.id === Number(id));
  if (loading) return <p className="text-xl font-semibold">Loading....</p>;
  const { image, name, description, category, price } = product || {};

  // const handleAddToWishlist = () => {
  //   const existingList = JSON.parse(localStorage.getItem("wishlist"));
  //   let updatedList = [];
  //   if (existingList) {
  //     const isDuplicate = existingList.some((p) => p.id === product.id);
  //     if (isDuplicate) {
  //       return alert("Already Exists!");
  //     } else {
  //       updatedList = [...existingList, product];
  //     }
  //   } else {
  //     updatedList.push(product);
  //   }
  //   localStorage.setItem("wishlist", JSON.stringify(updatedList));
  // };

  return (
    <div className="card bg-base-100 border shadow-sm">
      <figure className="h-84 overflow-hidden">
        <img className="w-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-gray-500">{description}</p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToWishlist(product)}
            className="btn btn-outline"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
