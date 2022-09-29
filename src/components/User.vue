<!--this component describe presenting properties for some type of data (`users` in this case) -->

<template>
		<input type="checkbox">
		{{ item.name }} ({{ item.username}})
</template>

<script>
export default {
	name: 'UserItem',
	props: {
		item: {
			type: Object,
			required: true,
		}
	}
}

</script>