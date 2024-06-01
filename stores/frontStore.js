export const useFrontStore = defineStore("taskStore", {
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
  }),
  actions: {},
  getters: {},
});
