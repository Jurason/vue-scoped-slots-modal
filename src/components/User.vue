<template>
	{{ item.name }} ({{ item.username}})
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