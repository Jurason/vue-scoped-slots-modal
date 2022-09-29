<template>
	<input type="checkbox" :checked="item.completed"> {{ item.title }}
</template>

<script>
export default {
	name: 'User-item',
	props: {
		item: {
			type: Object,
			required: true,
		}
	}
}
</script>