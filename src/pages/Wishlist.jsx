import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  const sortedItem = () => {
    if (sortOrder === "price-asc") {
      return [...wishlist.sort((a, b) => a.price - b.price)];
    } else if (sortOrder === "price-dsc") {
      return [...wishlist.sort((a, b) => b.price - a.price)];
    } else {
      return wishlist;
    }
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));

    let updatedList = existingList.filter((p) => p.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Wishlist:{" "}
          <span className="text-sm text-gray-500 font-medium">
            ({wishlist.length}) products found
          </span>
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none" selected>
              Sort by Price
            </option>
            <option value="price-asc">Low to High</option>
            <option value="price-dsc">High to Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem().map((p) => (
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
                onClick={() => handleRemove(p.id)}
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
