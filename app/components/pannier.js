app.component("panier", {
  props: {
    carts: {
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="cart">
        <div class="object">
            <h2>🛒 Mon Panier({{carts.length}})</h2>
            <div >
                <ul>
                    <li v-for="(cart, index) in carts" :key="index">{{cart.name}}-{{cart.price}}€  <button @click="removeToCart(index)">➖</button><strong>{{cart.nmb}}</strong><button @click="addToCart(index)">➕</button><button class="remove-btn" @click="removeObject(index)">❌</button></li>
                    <h3 v-if="carts.length">💰 Total: <s>{{total.ancien}}€</s> → <strong>{{total.new}}€ (-{{discount}}%)</strong></h3>
                    <p v-else>Votre panier est vide</p>
                </ul>
               
        </div>
        </div>
    </div>
    `,
  data() {
    return {
      discount: 10 /*
      carts: [
        {
          name: "smarphone XZ",
          price: 799,
          nmb: 2,
        },
        {
          name: "Ecouteurs Bluetooth",
          price: 199,
          nmb: 1,
        },
      ],*/,
    };
  },
  methods: {
    addToCart(index) {
      this.carts[index].nmb++;
    },
    removeToCart(index) {
      if (this.carts[index].nmb > 0) this.carts[index].nmb -= 1;
    },
    removeObject(index) {
      this.carts.splice(index);
    },
  },
  computed: {
    total() {
      let total = 0;
      let discoutnmb = this.discount / 100;
      for (let i = 0; i < this.carts.length; i++) {
        total += this.carts[i].price * this.carts[i].nmb;
      }
      const discount = total * discoutnmb;
      const news = total - discount;
      return { ancien: total, new: news };
    },
  },
});
