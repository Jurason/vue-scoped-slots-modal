<template>
<div v-if="open" class="modal">
	<div class="header">
		Header of Modal with Vue slots
	</div>
	<div class="content">
		<slot name="content">Default content</slot>
	</div>
		<Footer @close="close" :delete-confirmation="this.addConfirmation">

			<template #confirmation>
				<input class="confirm" type="text" v-model="confirmationText" >
			</template>

		</Footer>
</div>
</template>

<script>
import Footer from './Footer'
import { deleteRepo } from "../api";

export default {
	name: "ModalContent",
	components: {
		Footer,
	},
	props: {
		open: {type: Boolean, required: false},
		addConfirmation: {type: Boolean, required: false}
	},
	emits: {
		'close': {
			type: value => typeof value === 'boolean'
		}
	},
	data(){
		return{
			confirmationText: ''
		}
	},
	methods: {
		close(){
			const confirmationInput = document.querySelector('.confirm')
			if(confirmationInput && this.confirmationText !== 'I understand'){
				alert('For deleting repo, please enter `I understand`!')
				this.confirmationText=''
			}
			if(this.confirmationText === 'I understand'){
				deleteRepo()
				this.confirmationText=''
			}
			this.$emit('close', false)
		}
	}
}
</script>

<style scoped>
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

</style>