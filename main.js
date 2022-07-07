const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      selected: 0,
      description: "Good socks for good legs",
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 11,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      if (this.inventory === 0) {
        return;
      }

      this.variants[this.selected].quantity -= 1;
      this.cart += 1;
    },
    removeFromCart() {
      if (!this.cart) {
        return;
      }

      this.variants[this.selected].quantity += 1;
      this.cart -= 1;
    },
    changeVariant(index) {
      this.selected = index;
    },
  },
  computed: {
    item() {
      return this.variants[this.selected];
    },
    image() {
      return this.item.image;
    },
    inventory() {
      return this.item.quantity;
    },
  },
});
