<template>
  <div class="home">
    <div>
      <section class="hero is-info">
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


    <br />

    <div class="box">
      <div class="columns">
        <div class="column">
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/bee_jnwlxs.png" />
        </div>
        <div class="column">
          <p class="title is-5">Hello!</p>
          <p class="subtitle is-6">For 15 years I have been adapting, in real time, to meet the changing
            needs of clients. Getting to know them in depth and matching them
            with the most suitable solutions. I am driven to constantly improve
            and deliver results through my flexibility, focus and
            determination. I am a firm believer in lifelong learning and I continue
            to enjoy developing other skillsets including coding, mechanics and
            photography. I am looking to focus on furthering
            my coding skills.
          </p>
        </div>
      </div>
    </div>

    <br />

    <div class="box">
      <p> Find me on:
        <br />
        <a href="https://twitter.com/BaillieChris" target="_blank">
          <twitter-icon fillColor="#ffee00"/> 
        </a>
        <br />
        <a href="https://github.com/bailliechris" target="_blank">
          <github-icon fillColor="#ffee00"/>
        </a>
      </p>
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
  animation: spin 10s linear infinite;
}
@keyframes spin {
  0% { content:"Developer"; }
  10% { content:"_";}
  12% { content:"Husband"; }
  20% { content: "__"; }
  22% { content:"Father"; }
  30% { content:"_ _"; }
  32% { content:"Car Enthusiast"; }
  40% { content:"__ _"; }
  42% { content:"Photographer"; }
  50% { content:"____"; }
  52% { content:"Teacher"; }
  60% { content:"____ _"; }
  62% { content: "Learner"; }
  70% { content: "_____"; }
  72% { content: "Mechanic"; }
  80% { content: "_____ _"; }
  90% { content: "_____ __"; }
  100% { content: "_____ _ _"; }
}
</style>
