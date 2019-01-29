let product = 'socks';

var app = new Vue({
  el: '#app',
  data: {
    brand: 'Smolenskie',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    altText: "A pair of socks",
    selectedVariant: 0,
    link: "https://yandex.ru/search/?text=socks",
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/socks-gr.jpg",
        variantQuantity: 7
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/socks-bl.jpg",
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index
    },
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart != 0) {
        this.cart -= 1
      }
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.title + ' - are on sale!'
      }
      return this.title + ' - are not on sale!'
    }
  }
})
