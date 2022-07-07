<template>
  <div class="hello">
<h1>Basics</h1>
    <h2> Binding 1 way </h2>

    <b>{{ message }}</b><br>
    <!-- attribute set -->
    <input v-bind:value="message" type="text"/><br>
    <input :value="message" type="text"/><br>

    <hr>


    <h2>Code update </h2>

    <b>{{ message }}</b><br>
    <!-- attribute set -->
    <input v-bind:value="message" type="text"/> <br>
    <input :value="message" type="text"/><br>


    <hr>

    <h2> Binding 2 way </h2>

    <b>Data changing: {{message2}}</b><br>
    <input v-model="message2" type="text"/>


    <hr>

    <h2> Events </h2>

    <b>Click count: {{count}}</b><br>
    <button  @click="increment" type="button"  >click to increment</button>
    <hr>
    <h2>Conditional rendering </h2>
    <h2 v-if="show">Vue is awesome!</h2>
    <h2 v-else>Oh no 😢</h2>
      <b>Show: {{show}}</b><br>
      <button  @click="showHide" type="button"  >click to increment</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
      message: 'Hello World!',
      message2: 'Hello world 2',
      count:0,
      show:false
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
