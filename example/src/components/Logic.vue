<template>
  <div class="hello">
    <h1>Logic</h1>
   
    <h2>Conditional rendering </h2>
    <h3 v-if="show">Vue is awesome!</h3>
    <h3 v-else>Oh no 😢</h3>
      <b>Show: {{show}}</b><br>
      <button  @click="showHide" type="button"  >click to increment</button>
    <hr>

    <h2>List</h2>
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
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
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
