<template>
  <div id="nav">
    <router-link to="/">Basics</router-link> |
    <router-link to="/logic">Logic</router-link> |
    <router-link to="/list">TodoList</router-link>  |
    <router-link to="/todos">Todos API</router-link>
  </div>
  <router-view/>
</template>

<script>
// Load the Vue router
import { RouterView} from 'vue-router'



export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>


