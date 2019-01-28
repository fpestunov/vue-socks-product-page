let product = 'socks';

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    altText: "A pair of socks",
    image: "./images/socks-gr.jpg",
    link: "https://yandex.ru/search/?text=socks",
    inStock: true,
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
})
