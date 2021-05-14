<template>
  <div id="app">
    <TheNav />
    <router-view :key="$route.path" />
    <TheFooter />
  </div>
</template>

<script>
import TheNav from './components/TheNav'
import TheFooter from './components/TheFooter'


export default {
  name: 'App',
  components: {
    TheNav,
    TheFooter  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#subcolour {
  color:rgb(255, 238, 0);
}
</style>
