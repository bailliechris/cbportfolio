<template>
  <div id="app">
    <div class="columns">
      <div class="column">
        <div id="sidebar" class="container">
          <router-link id="nav_item" :to="{ path: '/' }">Chris Baillie</router-link>
          <router-link id="nav_item" :to="{ path: '/projects' }">Projects</router-link>
          <router-link id="nav_item" :to="{ path: '/about' }">About</router-link>
          <a id="nav_item" href="https://twitter.com/BaillieChris" target="_blank">
            <twitter-icon /> 
          </a>
          <a id="nav_item"  href="https://github.com/bailliechris" target="_blank">
            <github-icon />
          </a> 
        </div>
      </div>
    <div class="column">
      <div id="remainder" class="container">
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>   
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

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#sidebar{  
    padding:0px;
    min-height: 15vh; 
    width:90vw; 
    margin: auto;
    border-bottom: 5px solid black;
    border-right:0px;
    align-items:center;
}

#nav_item {
  background-color: white; /* Green */
  border: none;
  color: black;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:5px;
} 

#nav_item:hover {
  background-color: lightgray;
}

@media only screen and (min-width: 768px) 
{  
  #sidebar{
    padding:0px 5px;
    position: fixed;  
    height:100vh;
    min-width:15vw;
    max-width:15vw;
    margin:auto;
    color:black;
    border-right: 5px solid black;
    border-bottom: 0px;
    align-items:center;
    justify-content: center;
  }
  
  #remainder {
    width:80vw;
    margin:auto;
    padding-right: 5vw;
  }
  
  #nav_item {
    background-color: white; 
    border: none;
    color: black;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display:block;
    font-size: 16px;
    border-radius:5px;
  } 
}

</style>
