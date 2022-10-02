<template>
	<div class="footer">
		<div class="confirm">
			<slot name="confirmation"></slot>
		</div>
		<div class="close-button">
			<slot name="close-button">
				<div>
					<button @click="close">Close modal</button>
				</div>
			</slot>
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

.confirm {
	min-width: 60%;
	text-align: left;
}
</style>