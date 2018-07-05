<template>
  <div class="card">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Price: {{ price }}</h6>
      <button type="button" class="btn btn-primary" @click.prevent="onAdd">Add</button>
    </div>
  </div>
</template>

<script>
	export default {
		name: "ProductListItem",

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
      },
      image: {
        type: String,
        required: true
      }
    },

    methods: {
      onAdd(){
        this.$emit('added-item', this.id)
      }
    }
	}
</script>
