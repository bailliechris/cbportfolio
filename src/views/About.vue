<template>
  <div class="home">
    
    <TheTitle title="About" subtitle="Other things..." />

    <br />
    <github-icon />
    <twitter-icon />

  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from "@/components/TheTitle.vue";

export default {
  name: "Home",
  components: {
    TheTitle
  },  
  data() {
    return {

    };
  }
};
</script>

<style>

</style>

