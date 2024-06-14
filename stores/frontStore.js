export const useFrontStore = defineStore("frontStore", {
  state: () => ({
    banner: [
      {
        title: "Discover our Exclusive Collection of Luxury Furniture",
        thumb: "/images/hero/hero-banner-1.png",
      },
      {
        title: "Discover The Premium Furniture in Our Part roll Store",
        thumb: "/images/hero/04.png",
      },
      {
        title: " Elevate Your Space with Elegant Furniture Designs",
        thumb: "/images/hero/03.png",
      },
    ],
    brands: [
      {
        brand: "/images/brand/1.svg",
      },
      {
        brand: "/images/brand/2.svg",
      },
      {
        brand: "/images/brand/3.svg",
      },
      {
        brand: "/images/brand/4.svg",
      },
      {
        brand: "/images/brand/5.svg",
      },
      {
        brand: "/images/brand/6.svg",
      },
      {
        brand: "/images/brand/7.svg",
      },
      {
        brand: "/images/brand/8.svg",
      },
      {
        brand: "/images/brand/1.svg",
      },
      {
        brand: "/images/brand/2.svg",
      },
      {
        brand: "/images/brand/3.svg",
      },
    ],
    goals: [
      {
        thumb: "/images/goal/icon-1.png",
        title: "Original Product",
        pera: "There are many variations of passages of our Lorem Ipsum available but the.",
      },
      {
        thumb: "/images/goal/icon-2.png",
        title: "Satisfaction Guarantee",
        pera: "There are many variations of passages of our Lorem Ipsum available but the.",
      },
      {
        thumb: "/images/goal/icon-3.png",
        title: "New Arrival Everyday",
        pera: "There are many variations of passages of our Lorem Ipsum available but the.",
      },
      {
        thumb: "/images/goal/icon-4.png",
        title: "Fast & Free Shipping",
        pera: "There are many variations of passages of our Lorem Ipsum available but the.",
      },
    ],
    products: [
      {
        id: 1,
        sku: "KE-91039",
        thumb: ["/images/product/product-1.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Regency Side Table",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 850,
        discountPrice: 650,
        qty: 560,
        category: ["Exclusive Papillon XL Beds", "shirt", "pant", "Contemporary Sofa"],
        color: ["red"],
        brand: "Huawei",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est as erdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare asmetus urna, eu luctusi velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermeni nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. ut ornare.Aenean auctor sem ac ex efficitur Non mattis odio bibendum Sed vitae enim at tortor finibus Integer facilisis eleifend vehicula In hac habitasse platea dictumst Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: {
          width: 55,
          height: 28,
        },
      },
      {
        id: 2,
        sku: "KE-91040",
        thumb: ["/images/product/product-2.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Green Velvet Armchair",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 250,
        discountPrice: 150,
        qty: 560,
        category: ["electronics", "mobile", "phone", "gadget"],
        color: ["red"],
        brand: "Apple",
        tag: ["Luxury Chat Chair", "Sofa", "Mambo Lamp Light Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est as erdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare asmetus urna, eu luctusi velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermeni nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. ut ornare.Aenean auctor sem ac ex efficitur Non mattis odio bibendum Sed vitae enim at tortor finibus Integer facilisis eleifend vehicula In hac habitasse platea dictumst Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: {
          width: 55,
          height: 28,
        },
      },
      {
        id: 3,
        sku: "KE-91539",
        thumb: ["/images/product/product-5.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Regency Side Table",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 379,
        discountPrice: 250,
        qty: 560,
        category: ["Glass Coffee Table", "desk", "Exclusive Papillon XL Beds"],
        color: ["red"],
        brand: "Mi",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est as erdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare asmetus urna, eu luctusi velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermeni nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. ut ornare.Aenean auctor sem ac ex efficitur Non mattis odio bibendum Sed vitae enim at tortor finibus Integer facilisis eleifend vehicula In hac habitasse platea dictumst Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: {
          width: 55,
          height: 28,
        },
      },
      {
        id: 4,
        sku: "KE-91239",
        thumb: ["/images/product/product-6.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Barrel Chair Avenue",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 2350,
        discountPrice: 1550,
        qty: 560,
        category: ["rak", "balti"],
        color: ["red"],
        brand: "Samsung",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est as erdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare asmetus urna, eu luctusi velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermeni nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. ut ornare.Aenean auctor sem ac ex efficitur Non mattis odio bibendum Sed vitae enim at tortor finibus Integer facilisis eleifend vehicula In hac habitasse platea dictumst Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: {
          width: 55,
          height: 28,
        },
      },
      {
        id: 5,
        sku: "KE-91139",
        thumb: ["/images/product/product-4.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Barrel Chair Avenue",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 450,
        discountPrice: 150,
        qty: 560,
        category: ["chair", "table", "fan", "Vocan Center Table"],
        color: ["red"],
        brand: "Apple",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est as erdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare asmetus urna, eu luctusi velit placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi sodales fermeni nibh nec facilisis. Morbi pharetra varius velit, eget varius libero finibus quis. ut ornare.Aenean auctor sem ac ex efficitur Non mattis odio bibendum Sed vitae enim at tortor finibus Integer facilisis eleifend vehicula In hac habitasse platea dictumst Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus feugiat erat, eu posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: {
          width: 55,
          height: 28,
        },
      },
    ],
    posts: [
      {
        id: 1,
        thumb: "/images/news/news-1.png",
        title: "Cafe with coffee tables as sofas plants and shelves",
        date: "04 April 2024",
        author: "User",
        comments: "25",
      },
      {
        id: 2,
        thumb: "/images/news/news-2.png",
        title: " Comfortable armchair in a room decorated",
        date: "04 April 2024",
        author: "User",
        comments: "15",
      },
      {
        id: 3,
        thumb: "/images/news/news-3.png",
        title: "Cafe with coffee tables as sofas plants and shelves",
        date: "04 April 2024",
        author: "User",
        comments: "29",
      },
      {
        id: 4,
        thumb: "/images/news/news-2.png",
        title: " Modern studio apartment design bedroom and living space ",
        date: "04 April 2024",
        author: "User",
        comments: "72",
      },
    ],
    cart: [
      {
        id: 2,
        sku: "KE-91040",
        thumb: ["/images/product/product-2.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Green Velvet Armchair",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 250,
        discountPrice: 150,
        qty: 8,
        category: ["electronics", "mobile", "phone", "gadget"],
        color: ["red"],
        brand: "Apple",
        tag: ["Luxury Chat Chair", "Sofa", "Mambo Lamp Light Sofa"],
        des: "Curasum.",
        spec: { width: 55, height: 28 },
        username: "tpsi",
      },
      {
        id: 3,
        sku: "KE-91539",
        thumb: ["/images/product/product-5.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Regency Side Table",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 379,
        discountPrice: 250,
        qty: 6,
        category: ["Glass Coffee Table", "desk", "Exclusive Papillon XL Beds"],
        color: ["red"],
        brand: "Mi",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Currdiet ipsum.",
        spec: { width: 55, height: 28 },
        username: "munns",
      },
      {
        id: 4,
        sku: "KE-91239",
        thumb: ["/images/product/product-6.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Barrel Chair Avenue",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 2350,
        discountPrice: 1550,
        qty: 1,
        category: ["rak", "balti"],
        color: ["red"],
        brand: "Samsung",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pe",
        spec: { width: 55, height: 28 },
        username: "munna",
      },
      {
        id: 1,
        sku: "KE-91039",
        thumb: ["/images/product/product-1.png", "/images/product/product-2.png", "/images/product/product-3.png", "/images/product/product-5.png"],
        title: "Regency Side Table",
        pera: 'There are many variations of passages of Lorem Ipsum available but the majority our have suffered alteration in some form, by injected humour, or randomized words which don"t kia look even slightly believable. If you are going to use',
        price: 850,
        discountPrice: 650,
        qty: 58,
        category: ["Exclusive Papillon XL Beds", "shirt", "pant", "Contemporary Sofa"],
        color: ["red"],
        brand: "Huawei",
        tag: ["Chairs", "Sofa", "Single Sofa"],
        des: "Curabitur posuere massa. Nullam posuere nibh as endisse at dui euismod, rhoncus eros non, imperdiet ipsum.",
        spec: { width: 55, height: 28 },
        username: "munns",
      },
    ],
  }),
  actions: {
    addProductToCart(id) {
      // Check if the cart already contains the product
      const itemInCart = this.cart.find((c) => c.sku === id.sku);
      if (itemInCart) {
        console.log("already in the cart");
        return;
      }

      // Find the product in the products list and add it to the cart
      const productToAdd = this.products.find((product) => product.sku === id.sku);
      if (productToAdd) {
        productToAdd.qty = id.qty;
        productToAdd.username = id.username;
        this.cart.push(productToAdd);
      }
    },
    isInCart(sku) {
      return this.cart.some((item) => item.sku === sku);
    },
    updateQuantity(sku, newQty) {
      const item = this.cart.find((product) => product.sku === sku);
      if (item) {
        item.qty = newQty;
      }
    },
    deleteFromCart(sku) {
      const index = this.cart.findIndex((cartItem) => cartItem.sku === sku);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
  getters: {
    // get all unique cateigories
    allCategories: (state) => {
      const count = {};
      state.products.forEach((product) => {
        product.category.forEach((cate, index) => {
          const lowerCaseCategory = cate.toLowerCase();
          if (!count[lowerCaseCategory]) {
            count[lowerCaseCategory] = { count: 0, thumbs: [] }; // Initialize count and thumbs list
          }
          count[lowerCaseCategory].count += 1; // Increment count
          if (product.thumb && product.thumb[index]) {
            count[lowerCaseCategory].thumbs.push(product.thumb[index]); // Add thumb to the list if it exists
          } else {
            count[lowerCaseCategory].thumbs.push(null); // Handle cases where the thumb might not exist
          }
        });
      });
      return count;
    },
  },
});
