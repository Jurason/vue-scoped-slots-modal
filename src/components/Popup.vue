<template>
	<div class="backdrop" v-if="isOpen" @click="$emit('close')">
		<div class="popup">
			<h1>Attention!</h1>
			<hr />
			<slot></slot>
			<hr />
			<div class="footer">
				<button @click="$emit('close')">Cancel</button>
				&nbsp;
				<button @click="$emit('ok')">Ok</button>
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
	methods: {

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