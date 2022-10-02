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
<button @click="popupOpen">Open popup</button>
<Popup
:is-open="isPopupOpen"
@ok="popupConfirmed"
@close="isPopupOpen = false">
<template #actions="{ confirm }" >
TYPE
	&nbsp;
	<input type="text" :placeholder="$options.CONFIRMATION_TEXT" v-model="confirmation">
	<button :disabled="!isConfirmationCorrect" @click="confirm">Ok</button>
</template>
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
			isPopupOpen: false,
			confirmation: ''
		}
	},

	CONFIRMATION_TEXT: 'ACCEPT',
	
	mounted() {
		loadUsers().then(users => this.users = users)
		loadTodos().then(todos => this.todos = todos)
		document.addEventListener('keydown', this.handleKeyDown)
	},

	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	},

	computed: {
		isConfirmationCorrect(){
			return this.confirmation === this.$options.CONFIRMATION_TEXT
		}
	},
	methods: {
		handleKeyDown(e){
			if(this.isConfirmationCorrect && e.key === 'Enter'){
				this.popupConfirmed()
			}
		},
		popupOpen(){
			this.confirmation = ''
			this.isPopupOpen = true
		},
		popupConfirmed(){
			alert('Confirmed!')
			this.isPopupOpen = false
		},
	},
}
</script>

