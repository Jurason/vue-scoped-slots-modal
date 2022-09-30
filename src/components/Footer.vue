<template>
	<div class="footer">
		<div class="confirm" v-if="deleteConfirmation">
			<slot name="confirmation"></slot>
		</div>
		<div class="close-button">
			<button @click="close">Close modal</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "FooterModal",
	data() {
		return {

		}
	},
	props: {
		deleteConfirmation: {type: Boolean, required: false}
	},
	emits: {
		'close': {
			type: value => typeof value === 'boolean'
		}
	},
	methods: {
		close(){
			this.$emit('close', false)
		},
	}
}
</script>

<style scoped>
.footer {
	display: flex;
	justify-content: space-between;
	text-align: right;
	padding: 20px;
}

.close-button {
	margin-left: auto;
}

button {
	height: 40px;
	width: 150px;
	font-size: 20px;
	background: rgb(0 0 100 / .5);
	color: #fff;
}
.confirm {
	min-width: 60%;
	text-align: left;
}
</style>