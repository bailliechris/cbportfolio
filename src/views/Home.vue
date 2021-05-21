<template>
  <div class="home">
    <section id="hero" class="hero is-dark">
      <div class="hero-body">
        <p class="title">
          Chris Baillie
        </p>
        <p class="subtitle">
          <span id="change"></span>
        </p>
      </div>
    </section>


    <br />

    <div class="columns">
      <div class="column is-4">
        <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bee_jnwlxs.png" />
      </div>
      <div class="column is-8">
        <p class="title is-5">Hello!</p>
        <p class="subtitle is-6">I love to code. I'm continuously developing my skill set, 
          though my favourite combination is currently Vue.js Frontend with a NodeJS backend.
          However I am flexible and have previously used C#, C++, Laravel (PHP) and Python.
        </p>
      </div>
    </div>

    <div class="container">
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/vue-logo_xokduz.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/nodejs-1-logo_hcrx64.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/ExpressJS-logo_rru70a.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/react_ugdux2.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/MongoDB-logo_pktmb3.gif"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/python_yi5auy.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/csharp_i9jdrd.jpg"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/cplusplus_cfsg57.svg"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/laravel_b28my5.png"  />
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
.logo {
  max-width: 100%;
  height: 50px;
}

#hero {
  border-radius:5px;
}
#change {
  color:white;
}
#change:after {
  content:"";
  animation: spin 20s linear infinite;
}
@keyframes spin {
  0% { content:"_______";}
  6% { content:"Painter"; }
  11% { content:"_______";}
  17% { content:"Husband"; }
  23% { content:"______"; }
  28% { content:"Father"; }
  32% { content:"___ __________"; }
  38% { content:"Car Enthusiast"; }
  45% { content:"____________"; }
  51% { content:"Photographer"; }
  56% { content:"_______"; }
  61% { content:"Teacher"; }
  67% { content:"_______"; }
  72% { content:"Learner"; }
  78% { content:"________"; }
  83% { content:"Mechanic"; }
  88% { content:"__________"; }
  100% { content:"Developer"; }
}
</style>
