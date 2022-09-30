<!--this component describe presenting properties for some type of data (`users` in this case) -->

<template>
		{{ element.name }} ({{ element.username}})
</template>

<script>
export default {
	name: 'UserItem',
	props: {
		element: {
			type: Object,
			required: true,
		}
	}
}

</script>