Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
        
    <div class="product-image">
      <img :src="image" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

        <product-details :details="details"></product-details>

        <div class="color-box"
             v-for="(variant, index) in variants" 
             :key="variant.variantId"
             :style="{ backgroundColor: variant.variantColor }"
             @mouseover="updateProduct(index)"
             >
        </div> 

        <button v-on:click="addToCart" 
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }"
          >
        Add to cart
        </button>
        
        <button v-on:click="removeFromCart">
        Remove from cart
        </button>

        <p>User is premium: {{ premium }}</p>
        <p>Shipping: {{ shipping }}</p>
      </div>  
    
  </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: 'https://dl.dropboxusercontent.com/s/9zccs3f0pimj0wj/vmSocks-green-onWhite.jpg?dl=0',
          variantQuantity: 10     
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'https://dl.dropboxusercontent.com/s/t32hpz32y7snfna/vmSocks-blue-onWhite.jpg?dl=0',
          variantQuantity: 0     
        }
      ],
      onSale: true
    }
  },
  methods: {
      addToCart: function() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      },
      removeFromCart: function() {
          this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
      },
      updateProduct: function(index) {  
          this.selectedVariant = index
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
      shipping() {
        if (this.premium) {
          return "Free"
        } else {
          return 2.99
        }
      }
  }
})

var app = new Vue({
    el: '#app',
    data: {
      cart: [],
      premium: true
    },
    methods: {
      updateCart(id) {
        this.cart.push(id)
      },
      removeItem(id) {
          for(var i = this.cart.length - 1; i >= 0; i--) {
            if (this.cart[i] === id) {
               this.cart.splice(i, 1);
            }
          }
       }
    }
  })
