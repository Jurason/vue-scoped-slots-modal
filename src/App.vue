<template>
<!--	bind `todos` and `fields` array to List component, then filter with some logic which encapsulate List component-->
	<List :items="todos" :fields="['title']">
<!--		fulfilling slot & create variable slotProps which will contain `item` form `filteredItems-->
<!--		v-slot:element === #element-->
		<template v-slot:element="slotProps">
<!--			call T0do component (which response for presentation such type of data) and bind `item` -->
			<Todo :element="slotProps.item"/>
		</template>
	</List>
<!--	create modal element-->
<button @click="isPopupOpen = true">Open popup</button>
<Popup
:is-open="isPopupOpen"
@ok="popupConfirmed"
@close="isPopupOpen = false">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cum cupiditate ducimus et harum nemo officiis optio quisquam sit.
</Popup>

</template>

<script>
import { loadUsers, loadTodos } from "./api";
import List from './components/List.vue'
import Todo from './components/Todo.vue'
import Popup from './components/Popup.vue'


export default {
  name: 'App',
  components: {
		List,
		Todo,
		Popup
	},
	data() {
		return {
			users: [],
			todos: [],
			fields: [],
			isPopupOpen: false
		}
	},
	mounted() {
		loadUsers().then(users => this.users = users)
		loadTodos().then(todos => this.todos = todos)
	},
	methods: {
		popupConfirmed(){
			alert('Confirmed!')
			this.isPopupOpen = false
		}
	}
}
</script>

