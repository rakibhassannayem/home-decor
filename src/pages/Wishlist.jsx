import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Wishlist:{" "}
          <span className="text-sm text-gray-500 font-medium">
            ({wishlist.length}) products found
          </span>
        </h1>
        <button className="btn">Sort</button>
      </div>
      <div className="space-y-3">
        {wishlist.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.name}</h3>
              <p className="text-base-content/70">{p.category}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.price}</div>
              <button
                // onClick={() => handleRemove(p.id)}
                className="btn btn-outline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Wishlist;
