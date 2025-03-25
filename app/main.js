const app = Vue.createApp({
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    addCartMain(objects) {
      const idobject = objects.id;
      for (let i = 0; i < this.carts.length; i++) {
        if (idobject == this.carts[i].id) {
          this.carts[i].nmb++;
          this.carts[i].push(carts[i]);
          break;
        }
      }
      objects.nmb = 1;
      console.log(objects.nmb);
      this.carts.push(objects);
    },
  },
});
