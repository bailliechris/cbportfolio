<template>
  <div id="app">
    <nav>
      <article id="sidebar">
        <router-link class="nav_item" :to="{ path: '/' }">Chris Baillie</router-link>
        <router-link class="nav_item" :to="{ path: '/projects' }">Projects</router-link>
        <router-link class="nav_item" :to="{ path: '/about' }">About</router-link>
        <a class="nav_item" href="https://twitter.com/BaillieChris" target="_blank">
          <twitter-icon /> 
        </a>
        <a class="nav_item"  href="https://github.com/bailliechris" target="_blank">
          <github-icon />
        </a> 
      </article>
    </nav>
    <main>
        <router-view :key="$route.path" />
    </main>
  </div>   
</template>

<script>
//import TheNav from './components/TheNav'
//import TheFooter from './components/TheFooter'


export default {
  name: 'App',
  components: {

  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}

nav {
  position: relative;
  width: 10em;
  height: 99vh;
  border-right: 5px solid black;
  background-color: white;
}

nav article#sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
main {
  margin-left: 0.5em;
}

.nav_item {
  background-color: white;
  border: none;
  color: black;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-weight: bolder;
} 

.nav_item:hover {
  text-shadow:#666666 1px 0 10px;
}

@media (max-width: 768px) {
  nav {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
  }

  nav article#sidebar {
    flex-direction: row;
    justify-content: center;
  }

  main {
    margin-top: 3.375em;
    margin-left: 0;
  }
}

</style>
