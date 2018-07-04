<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fas fa-search"></i></span>
    </div>
    <input type="text" class="form-control" placeholder="Search" v-model="search" @keyup.enter="onSubmit">
  </div>
</template>

<script>
	export default {
		name: "SearchInput",

    props: {
		  search: {
		    type: String,
        required: true
      }
    },

    methods: {
		  onSubmit() {
		    this.$emit('entered-search', this.search)
      }
    }
	}
</script>
