<template>
	<input type="text" placeholder="filter..." v-model="filter" />
	<hr/>
	<ul>
		<li v-for="item in filteredItems" :key="item.id">
			<component :is="itemComponent" :item="item"/>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    items: {type: Array, required: true},
		itemComponent: {type: Object, required: true},
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
