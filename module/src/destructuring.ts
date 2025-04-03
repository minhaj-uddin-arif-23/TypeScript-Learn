{
  // object destructuring
  const product = {
    id: 1,
    names: "Wireless Mouse",
    brand: "Logitech",
    price: 25.99,
    category: "Electronics",
    inStock: true,
    specifications: {
      connectivity: "Bluetooth",
      battery: "Rechargeable",
      dpi: 1600,
    },
    reviews: {
      user: "JohnDoe",
      rating: 4.5,
      comment: "Great mouse, smooth performance!",
    },
  };

  const {
    names,
    category,
    reviews: { user, rating, comment },
    specifications: { connectivity, battery, dpi },
  } = product;

  // array destructuring

  const Products = [
    "SmartPhone","Laptop","Monitor","Apple", "Samsung", "Dell"
  ];
  const [,,hp,iphone,...rest] = Products
}
