// Fake product data
const products = [
  {
    id: 1,
    title: "Winter Jacket",
    price: 89,
    image:
      "https://down-vn.img.susercontent.com/file/60924fa2f79361952d545cc5c47d128b.webp",
    category: "Fashion",
  },
  {
    id: 2,
    title: "Gaming Mouse",
    price: 35,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-madwpwso6mrlbe.webp",
    category: "Gaming",
  },
  {
    id: 3,
    title: "Laptop SSD",
    price: 129,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mfezc1mqn5zibd.webp",
    category: "Laptop",
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 59,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mgm9dt0of8co5e.webp",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Sneakers",
    price: 45,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rens-m8ijdrh9ddp3e0.webp",
    category: "Shoes",
  },
  {
    id: 6,
    title: "Makeup Kit",
    price: 32,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mcn34cxxvg2qfc.webp",
    category: "Beauty",
  },
  {
    id: 7,
    title: "Smart Watch",
    price: 78,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m91bc6uju7b666.webp",
    category: "Electronics",
  },
  {
    id: 8,
    title: "Gaming Keyboard",
    price: 65,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu0ybupmaknl0a.webp",
    category: "Gaming",
  },
  {
    id: 9,
    title: "Running Shoes",
    price: 52,
    image:
      "https://down-vn.img.susercontent.com/file/cn-11134207-820l4-mgj3dh6lndai76.webp",
    category: "Shoes",
  },
  {
    id: 10,
    title: "Office Chair",
    price: 165,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-mab4clnd9kkr40.webp",
    category: "Office",
  },
];

exports.getAllProducts = () => {
  return products;
};

exports.getProductById = (id) => {
  return products.find((p) => p.id === id);
};
