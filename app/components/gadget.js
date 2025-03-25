app.component("gadget", {
  template:
    /*html*/
    `<div class="gadget-container">
          <div class="gadget" v-for="(object, index) in objects" :key="index">
            <img :src="object.image" alt="">
            <h2>{{object.name}}</h2>
            <p>Prix: {{object.price}}€</p>
            <p class="in-stock" v-if="object.inStock">✔️ In stock</p>
            <p class="out-of-stock" v-else>❌ En rupture de stockt</p>
            <button :disabled="!object.inStock" @click="addToCart(index)">Ajouter au panier</button>
    </div>
      </div>
      `,
  data() {
    return {
      objects: [
        {
          id: 1,
          name: "smarphone XZ",
          price: 799,
          inStock: true,
          image: "./assets/images/phone.jpg",
          nmb: 1,
        },
        {
          id: 2,
          name: "Laptop Pro",
          price: 1299,
          inStock: false,
          image: "./assets/images/Laptop.jpg",
          nmb: 1,
        },
        {
          id: 3,
          name: "Ecouteurs Bluetooth",
          price: 199,
          inStock: true,
          image: "./assets/images/earbuds.jpg",
          nmb: 1,
        },
      ],
    };
  },
  methods: {
    addToCart(index) {
      this.$emit("add-to-cart", this.objects[index]);
    },
  },
  computed: {},
});
