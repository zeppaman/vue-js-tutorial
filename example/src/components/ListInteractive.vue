<template>
  <div class="hello">
    <h1> Add one</h1>
    <input v-model="currentText" /> <button @click="addTodo">Add</button>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    for(let i=0; i<10; i++)
    {
      this.todos.push({
        id:i,
        text:"todo #"+i
      });
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
