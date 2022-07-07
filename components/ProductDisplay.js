app.component("product-display", {
  props: {
    isPremium: {
      type: Boolean,
      required: true,
    },
  },
  template: /*html*/ `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" :alt="product">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>Shipping {{ shipping }}</p>
          <p>{{ description }}</p>
          <p v-if="inventory > 10">In Shop</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out</p>
          <p v-else>Sold Out</p>
          <product-details :details="details"></product-details>
          <div v-for="(variant, index) in variants" :key="variant.id" class="color-circle" :style="{ backgroundColor: variant.color }" @mouseover="changeVariant(index)"></div>
          <button class="button" :class="{ disabledButton: inventory === 0 }" @click="addToCart">Add to Cart</button>
          <button class="button" @click="removeFromCart">Cancel</button>
        </div>
      </div>
      <review-list v-if="reviews.length > 0" :reviews="reviews"></review-list>
      <review-form @add-review="addReview"></review-form>
    </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
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
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      if (this.inventory === 0) {
        return;
      }

      this.$emit("add-to-cart", this.variants[this.selected].id);
      this.variants[this.selected].quantity -= 1;
    },
    removeFromCart() {
      if (this.variants[this.selected].quantity) {
        return;
      }

      this.variants[this.selected].quantity += 1;
      this.$emit("remove-from-cart", this.variants[this.selected].id);
    },
    changeVariant(index) {
      this.selected = index;
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    item() {
      return this.variants[this.selected];
    },
    image() {
      return this.item.image;
    },
    inventory() {
      return this.item.quantity;
    },
    shipping() {
      if (this.isPremium) {
        return "Free";
      }
      return "2.99";
    },
  },
});
