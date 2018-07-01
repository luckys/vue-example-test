<template>
  <div>
    <h2>Products Page</h2>

    <cart-list></cart-list>
  </div>
</template>

<script>
  import CartList from '@/components/Cart/CartList'
export default {
  name: 'ProductsPage',

  components: {
    CartList
  }
}
</script>
