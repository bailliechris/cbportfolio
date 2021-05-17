<template>
  <div id="app">
    <div class="bg">
      <TheNav />
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import TheNav from './components/TheNav'
//import TheFooter from './components/TheFooter'


export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style>
html, body {
  height:125%
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin:0;
}

#subcolour {
  color:rgb(255, 238, 0);
}

.bg {
  /* The image used */
  background-image: url("https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bg_hbfxue_u30zyk.jpg");

  /* Full height */
  height: 125%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto auto;
  background-attachment: fixed;
  background-origin:border-box;
}
</style>
