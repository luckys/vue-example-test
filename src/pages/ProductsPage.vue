<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>Products Page</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <cart-list :cart-items="cartItems">
          <h3 slot="title">Cart</h3>
        </cart-list>
      </div>
    </div>
  </div>
</template>

<script>
  import CartList from '@/components/Cart/CartList'

  const items = [
    {
      "id": 2,
      "title": "Licensed Cotton Hat",
      "price": 533.00,
      "image": "product1.jpg"
    },
    {
      "id": 3,
      "title": "Handmade Frozen Salad",
      "price": 0.00,
      "image": "product2.jpg"
    }]
export default {
  name: 'ProductsPage',

  components: {
    CartList
  },

  data () {
    return {
      cartItems: items
    }
  }
}
</script>
