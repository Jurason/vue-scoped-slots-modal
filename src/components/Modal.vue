<template>
<div v-if="open" class="modal">
	<div class="header">
		Header of Modal with Vue slots
	</div>
	<div class="content">
		<slot name="content">Default content</slot>
	</div>
	<div class="footer">
		<slot name="footer" :close="close" :confirm="confirm">
			<div class="one-button">
				<button @click="close">Cancel</button>
			</div>
		</slot>
	</div>
</div>
</template>

<script>

export default {
	name: "ModalContent",
	props: {
		open: {type: Boolean, required: false},
		addConfirmation: {type: Boolean, required: false}
	},
	emits: {
		'close': {

		},
		'confirm': {

		}
	},
	data(){
		return{

		}
	},
	mounted() {
		document.addEventListener('keydown', this.handleKeypress)
	},
	beforeUnmount() {
		document.addEventListener('keydown', this.handleKeypress)
	},
	methods: {
		handleKeypress(e){
			if(this.open && e.key === 'Escape'){
				this.close()
			}
		},
		close(){
			this.$emit('close', null)
		},
		confirm(){
			this.$emit('confirm', null)
			console.log('request was sent')
		}
	}
}
</script>

<style>
	.modal {
		width: 80%;
		margin: auto;
		border: 2px solid rgb(0 0 0 / .3);
		border-radius: 25px;
		background: rgb(0 0 0 / .3);
	}
	.header {
		text-align: center;
		font-size: 40px;
		margin-bottom: 20px;
	}
	.content {
		display: flex;
		width: 80%;
		margin: auto;
		justify-content: center;
		align-items: center;
		color: #fff;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		padding: 50px;
	}
	.one-button {
		margin-left: auto;
	}

</style>