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
      <h1>Wishlist page: {wishlist.length}</h1>
    </div>
  );
};

export default Wishlist;
