export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");

    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const addToWishlist = (product) => {
  const existingWishlist = loadWishlist();
  try {
    const isDuplicate = existingWishlist.some((p) => p.id === product.id);

    if (isDuplicate) return alert("Already Exists!");

    const updatedWishlist = [...existingWishlist, product];

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const removeFromWishlist = (id) => {
  const existingWishlist = loadWishlist();
  try {
    const updatedWishlist = existingWishlist.filter((p) => p.id !== id);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  } catch (err) {
    console.log(err);
    return;
  }
};
