<template>
	<div class="backdrop" v-if="isOpen" @click="close" @keypress.esc="close">
		<div class="popup" @click.stop >
			<h1>Attention!</h1>
			<hr />
			<slot></slot>
			<hr />
			<div class="footer">
				<button @click="close">Cancel</button>
				&nbsp;
				<button @click="confirm">Ok</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		isOpen: {type: Boolean, required: true}
	},
	emits: {
		'ok': null,
		'close': null
	},
	data(){
		return {

		}
	},
	mounted() {
		document.addEventListener('keydown', this.handleKeyDown)
	},
	// убираем за собой, так как ранее повесили событие "вне" компонента на document
	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	},
	methods: {
		// создаем именнованую функцию для последующего удаления (cb без имени удалить невозможно)
		handleKeyDown(e){
				if(this.isOpen && e.key === 'Escape'){
					this.close()
				}
		},
		close(){
			this.$emit('close')
		},
		confirm(){
			this.$emit('ok')
		}
	}
}
</script>

<style>
.popup {
	top: 50px;
	padding: 20px;
	left: 50%;
	transform: translateX(-50%);
	position: fixed;
	z-index: 101;
	background-color: white;
	border-radius: 10px;
}

.popup h1 {
	text-align: center;
	margin: 0;
}

.backdrop {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;
}

.footer {
	text-align: right;
}
</style>