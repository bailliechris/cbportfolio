<template>
  <div class="home">
    <div>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">
            Chris Baillie
          </p>
          <p class="subtitle">
            <span id="change"></span>
          </p>
        </div>
      </section>
    </div>  

    <div>
        <h1>Introduction</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  },  
  data() {
    return {

    };
  }
};
</script>

<style scoped>
#change {
  color:rgb(255, 238, 0);
}
#change:after {
  content:"";
  animation: spin 3s linear infinite;
}
@keyframes spin {
  0% { content:"Developer"; }
  20% { content:"Father"; }
  40% { content:"Car Enthusiast"; }
  60% { content:"Photographer"; }
  80% { content:"Teacher"; }
  100% { content: "Learner"; }
}
</style>
