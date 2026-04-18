const products = [
  {
    id: 1,
    name: "Ceramic Mug",
    price: 299,
    image: "images/Ceramic Mug.jpg",
    category: "kitchen",
    description : "A quietly refined ceramic mug designed for everyday use. Its smooth, matte finish and balanced weight offer a comfortable grip, making each sip feel natural and unforced. Suitable for coffee, tea, or any moment that calls for a pause.",
    featured : true
  },
  {
    id: 2,
    name: "Wooden Cutting Board",
    price: 1299,
    image: "images/Wooden Cutting Board.jpg",
    category: "kitchen",
    description : "Crafted from solid wood, this cutting board highlights the natural grain and warmth of the material. Durable yet gentle on knives, it serves both as a reliable kitchen tool and a subtle presentation piece for simple meals.",
    featured : false
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 499,
    image: "images/Cotton T-Shirt.jpg",
    category: "clothing",
    description : "Made from soft, breathable cotton, this T-shirt is built for daily wear. With a clean silhouette and minimal detailing, it adapts effortlessly to different styles while maintaining a sense of quiet comfort.",
    featured : false
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 11999,
    image: "images/Leather Jacket.jpg",
    category: "clothing",
    description : "A timeless leather jacket defined by its clean lines and understated structure. The natural texture of the leather evolves over time, developing a unique character with wear. Designed to be worn often and kept for years.",
    featured : false
  },
  {
    id: 5,
    name: "Linen Tablecloth",
    price: 399,
    image: "images/Linen Tablecloth.jpg",
    category: "kitchen",
    description : "A lightweight linen tablecloth that brings a calm, natural texture to the dining space. Its subtle wrinkles and breathable fabric create an effortless look, suitable for both everyday meals and quiet gatherings.",
    featured : true
  },
  {
    id: 6,
    name: "Glass Storage Jar",
    price: 299,
    image: "images/Glass Storage Jar.jpg",
    category: "kitchen",
    description : "A clear glass jar designed for simple storage and easy visibility. Paired with a minimal lid, it keeps ingredients organized while maintaining a clean and uncluttered kitchen aesthetic.",
    featured : false
  },
  {
    id: 7,
    name: "Minimal Desk Lamp",
    price: 1499,
    image: "images/Minimal Desk Lamp.jpg",
    category: "lighting",
    description : "A compact desk lamp with a clean silhouette and soft, diffused light. Designed to reduce visual noise while providing focused illumination for reading, working, or unwinding at night.",
    featured : true
  },
  {
    id: 8,
    name: "Wool Throw Blanket",
    price: 2399,
    image: "images/Wool Throw Blanket.jpg",
    category: "home",
    description : "A soft wool throw that adds warmth without excess weight. Its natural fibers and muted color palette make it an easy addition to any space, offering comfort during slower moments at home.",
    featured : false
  },
  {
    id: 9,
    name: "Canvas Tote Bag",
    price: 499,
    image: "images/Canvas Tote Bag.jpg",
    category: "accessories",
    description : "Made from durable cotton canvas, this tote bag is built to carry daily essentials with ease. Its structured form and neutral tone make it a practical companion for both errands and casual outings.",
    featured : true
  }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

// 將產品資料存到 localStorage
function updateCartCounter() {
    // 1. 從 localStorage 讀取購物車資料, 沒有則回傳空陣列
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // 2. 算出數量
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    // 3. 更新 .cart-counter 的文字
    document.querySelector('.cart-counter').textContent = count;
}