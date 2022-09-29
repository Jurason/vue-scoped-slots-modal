<!--this component describe presenting properties for some type of data (`todos` in this case) -->

<template>
	<input type="checkbox" :checked="item.completed"> {{ item.title }}
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		item: {
			type: Object,
			required: true,
		}
	}
}
</script>