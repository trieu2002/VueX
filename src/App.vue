<template>
  <div>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="item in todoItems" :key="item.id">
        <input type="text" v-model="item.text" @change="editTodoItem(item)" />
        <button @click="deleteTodoItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodo: '',
      todoItems: []
    }
  },
  created() {
    this.todoItems = this.$store?.state?.todoItems
  },
  methods:{
    addTodo(){
      const newTodoItem = { id: Date.now(), text: this.newTodo };
      this.$store.dispatch('addTodoItem', newTodoItem)
      this.newTodo = ''
    },
    editTodoItem(item) {
      this.$store.dispatch('editTodoItem', item)
    },
    deleteTodoItem(itemId) {
      this.$store.dispatch('deleteTodoItem', itemId)
    }
  }
}
</script>