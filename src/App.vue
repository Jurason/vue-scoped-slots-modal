<template>
<!--	bind `todos` and `fields` array to List component, then filter with some logic which encapsulate List component-->
	<List :items="todos" :fields="['title']">
<!--		fulfilling slot & create variable slotProps which will contain `item` form `filteredItems-->
<!--		v-slot:element === #element-->
		<template v-slot:element="slotProps">
<!--			call Tоdo component (which response for presentation such type of data) and bind `item` -->
			<Todo :element="slotProps.item"/>
		</template>
	</List>
	<button @click="openModal">Open modal</button>
	&nbsp;
	<button @click="openModalWithConfirmation">Open modal with delete confirmation</button>
	<hr>
<!--	create modal element-->
<Modal @close="isModalOpen = false" @confirm="isModalOpen = false" :open="isModalOpen" :addConfirmation="addConfirmation">
	<template v-slot:content>
		<List :items="users" :fields="['name', 'username']">
			<template #element="{ item: user }">
				<User :element="user"/>
			</template>
		</List>
	</template>
	<template #footer="{ close, confirm }" v-if="addConfirmation">
		<div>
		TYPE
		&nbsp;
		<input type="text" :placeholder="$options.CONFIRMATION_TEXT" v-model="confirmation">
		</div>
		<div>
			<button @click="close">Cancel</button>
			<button @click="confirm" :disabled="!isConfirm">Ok</button>
		</div>
	</template>
</Modal>
</template>

<script>
import { loadUsers, loadTodos } from "./api";
import List from './components/List.vue'
import Todo from './components/Todo.vue'
import User from './components/User.vue'
import Modal from './components/Modal.vue'



export default {
  name: 'App',
  components: {
		List,
		Todo,
		User,
		Modal
	},
	data() {
		return {
			users: [],
			todos: [],
			fields: [],
			isModalOpen: false,
			addConfirmation: false,
			confirmation: '',
		}
	},

	CONFIRMATION_TEXT: 'ACCEPT',

	mounted() {
		loadUsers().then(users => this.users = users)
		loadTodos().then(todos => this.todos = todos)

		document.addEventListener('keypress', this.handleKeypress)
	},

	beforeUnmount() {
		document.addEventListener('keypress', this.handleKeypress)
	},

	computed: {
		isConfirm(){
			return this.confirmation === this.$options.CONFIRMATION_TEXT
		}
	},
	methods: {
		handleKeypress(e){
			console.log('handleKeypress')
			if(this.isConfirm && e.key === 'Enter'){
				this.isModalOpen = false
				console.log('request was sent')
			}
		},

		openModal() {
			this.isModalOpen = true
			this.addConfirmation = false
		},
		openModalWithConfirmation() {
			this.confirmation = ''
			this.isModalOpen = true
			this.addConfirmation = true
		}
	}
}
</script>

