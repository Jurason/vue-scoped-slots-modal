<template>
	<List :items="users" :fields="['name', 'username']" :item-component="$options.listItemComponents.User"/>
	<hr/>
	<List :items="todos" :fields="['title']" :item-component="$options.listItemComponents.Todo"/>
</template>

<script>
import { loadUsers, loadTodos } from "./api";
import List from './components/List.vue'
import User from './components/User.vue'
import Todo from './components/Todo.vue'

export default {
  name: 'App',
  components: {
		List
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
	listItemComponents: {
		User,
		Todo
	},
}
</script>

