<template>
  <div>
    <slot name="title"></slot>
    <ul class="list-group">
      <cart-list-item
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :id="cartItem.id"
        :title="cartItem.title"
        :price="cartItem.price"
        @removed-item="onRemoveItem">
      </cart-list-item>
    </ul>
    <hr>
    <strong>Total: {{ amount }} €</strong>
  </div>
</template>

<script>
  import CartListItem from './CartListItem'
  import cartListService from '@/services/Cart/CartListService'

	export default {
		name: "CartList",

    components: {CartListItem},

    props: {
		  cartItems: {
		    type: Array,
        required: true
      }
    },

    computed: {
		  amount(){
		    return cartListService.getAmount(this.cartItems)
      }
    },

    methods: {
      onRemoveItem(itemId){
        this.$emit('cart-item-removed', itemId)
      }
    }
	}
</script>

