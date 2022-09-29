<template>
	<List :items="users" :fields="['name', 'username']">
<!--		using decomposition-->
		<template #element="slotProps">
			<UserItem :item="slotProps.item"/>
		</template>
	</List>
	<hr/>
<!--	bind `todos` and `fields` array to List component, then filter with some logic which encapsulate List component-->
	<List :items="todos" :fields="['title']">
<!--		fulfilling slot & create variable slotProps which will contain `item` form `filteredItems-->
		<template #element="slotProps">
<!--			call Tоdo component (which response for presentation such type of data) and bind `item` -->
			<Todo :item="slotProps.item"/>
		</template>
	</List>
</template>

<script>
import { loadUsers, loadTodos } from "./api";
import List from './components/List.vue'
import Todo from './components/Todo.vue'
import UserItem from "./components/User.vue";

export default {
  name: 'App',
  components: {
		List,
		Todo,
		UserItem
	},
	data() {
		return {
			users: [],
			todos: [],
			fields: [],
		}
	},
	mounted() {
		loadUsers().then(users => this.users = users)
		loadTodos().then(todos => this.todos = todos)
	},
}
</script>

