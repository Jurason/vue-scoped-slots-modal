<!--this component filter any items by any fields which was bind to it-->

<template>
	<input type="text" placeholder="filter..." v-model="filter" />
	<hr/>
	<ul>
		<li v-for="item in filteredItems" :key="item.id">
<!--			create slot with any name and determine prop `item` which take item from filteredItems -->
			<slot name="element" :item="item"/>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    items: {type: Array, required: true},
		fields: {type: Array, required: true},
  },
	data(){
		return {
			filter: '',
		}
	},
	computed: {
		filteredItems() {
			return this.filter ? this.items.filter(el =>
					this.fields.some(f =>
							el[f].toLowerCase().includes(this.filter.toLowerCase())))
					: this.items
		},
	}
}
</script>
