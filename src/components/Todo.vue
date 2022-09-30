<!--this component describe presenting properties for some type of data (`todos` in this case) -->

<template>
	<input type="checkbox" :checked="element.completed"> {{ element.title }}
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		element: {
			type: Object,
			required: true,
		}
	}
}
</script>