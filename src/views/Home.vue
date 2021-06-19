<template>
  <div class="home">
    <section id="hero" class="hero is-dark">
      <div class="hero-body">
        <div class="columns">
          <div class="column">
            <p class="title">
              Chris Baillie
            </p>
          </div>
          <div class="column">
            <span id="change"></span>
          </div>
        </div>
      </div>
    </section>


    <br />

    <div class="columns">
      <div class="column is-4">
        <img id="img" width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bee_jnwlxs.png" />
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
      <p class="title is-6">Languages and Tools recently used:</p>
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/vue-logo_xokduz.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/nodejs-1-logo_hcrx64.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/ExpressJS-logo_rru70a.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632353/portfolio/react_ugdux2.png"  />
      <img class="logo" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632352/portfolio/MongoDB-logo_pktmb3.gif"  />
      <p class="title is-6">Languages and Tools previously used:</p>
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
  opacity: 0;
  animation: spin 20s linear infinite;
}
@keyframes spin {
  0% { content:" "; opacity: 0;}
  6% { content:"Painter"; opacity: 1;}
  11% { content:" ";opacity: 0;}
  17% { content:"Husband"; opacity: 1;}
  23% { content:" "; opacity: 0;}
  28% { content:"Father"; opacity: 1;}
  32% { content:" "; opacity: 0;}
  38% { content:"Car Enthusiast"; opacity: 1;}
  45% { content:" "; opacity: 0;}
  51% { content:"Photographer"; opacity: 1;}
  56% { content:" "; opacity: 0;}
  61% { content:"Teacher"; opacity: 1;}
  67% { content:" "; opacity: 0;}
  72% { content:"Learner"; opacity: 1;}
  78% { content:" "; opacity: 0;}
  83% { content:"Mechanic"; opacity: 1;}
  88% { content:" ";opacity: 0; }
  100% { content:"Developer"; opacity: 1;}
}

img {
  opacity: 0.5;
  border-radius: 5px;
  transition: transform 1s;
}

img:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>
