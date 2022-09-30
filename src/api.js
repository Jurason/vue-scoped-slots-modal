export function loadUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
}

export function loadTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
}

export function deleteRepo() {
    console.log('Delete request was sent!')
}
