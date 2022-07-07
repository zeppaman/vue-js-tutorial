<template>
  <div class="hello">
    <h1> Add one</h1>
    <input v-model="currentText" /> <button @click="addTodo">Add</button>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
         {{ todo.StartDate }}  - {{ todo.EndDate }} | {{ todo.Description }} ({{todo.Status}})
         
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: async function(){

    let items= await axios.get("https://api.mockaroo.com/api/2e11fac0?count=100&key=8345cee0");
    console.log(items.data);

    this.todos=items.data;
    
  },
   data() {
    return {
      show:false,
      todos: [],
      currentText:""
    }
  },
  methods: {
    addTodo() {
       this.todos.push({
        id:this.todos.length+1,
        text:this.currentText
      });
    },
    showHide(){
      this.show=!this.show;
    }
  }
}
</script>
