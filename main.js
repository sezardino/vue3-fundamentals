const app = Vue.createApp({
  data() {
    return {
      cart: [],
      isPremium: true,
    };
  },
  methods: {
    addHandler(id) {
      this.cart.push(id);
    },
    removeHandler(id) {
      console.log(id);
      const index = this.cart.findIndex((item) => item === id);

      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
  computed: {},
});
