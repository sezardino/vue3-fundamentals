const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      description: "Good socks for good legs",
      image: "./assets/images/socks_green.jpg",
      inventory: 11,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      if (this.inventory === 0) {
        return;
      }

      this.inventory -= 1;
      this.cart += 1;
    },
    removeFromCart() {
      if (!this.cart) {
        return;
      }

      this.inventory += 1;
      this.cart -= 1;
    },
    changeImage(imageVariant) {
      this.image = imageVariant;
    },
  },
});
