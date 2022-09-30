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
	<button @click="openModalWithConfirmation">Open modal with delete confirmation</button>
	<hr>
<!--	create modal element-->
<Modal @close="modalVisibility = false" :open="modalVisibility" :addConfirmation="addConfirmation">
	<template v-slot:content>
		<List :items="users" :fields="['name', 'username']">
			<template #element="{ item: user }">
				<User :element="user"/>
			</template>
		</List>
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
			modalVisibility: false,
			addConfirmation: false
		}
	},
	mounted() {
		loadUsers().then(users => this.users = users)
		loadTodos().then(todos => this.todos = todos)
	},
	methods: {
		openModal() {
			this.modalVisibility = true
			this.addConfirmation = false
		},
		openModalWithConfirmation() {
			this.modalVisibility = true
			this.addConfirmation = true
		}
	}
}
</script>

