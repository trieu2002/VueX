<template>
    <div>
      <Todo v-for="todo in todos" :key="todo.id"  />
    </div>
</template>

<script>
import Todo from './Todo.vue';
export default {
    name:"todoList",
    components:{
        Todo
    },
    computed:{
        todos(){
            return this.$store.state.todos;
        }
    }
}
</script>

<style >

</style>