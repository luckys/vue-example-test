<template>
  <li class="list-group-item">
    {{ title }} - {{ price }} €
    <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="onRemove">Remove</button>
  </li>
</template>

<script>
	export default {
		name: "CartListItem",

    props: {
		  id: {
		    type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },

    methods: {
		  onRemove(){
		    this.$emit('removed-item', this.id)
      }
    }
	}
</script>

