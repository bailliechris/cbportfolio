<template>
  <div class="home">

    <TheTitle title="About" subtitle="Other things I do..." />

    <br />
    <div class="box">
      <div class="columns">
        <div class="column">
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/child_hohuui.png" />
        </div>
        <div class="column">
          <p class="title is-5">Photographer</p>
          <p class="subtitle is-6">I always enjoy learning new things, so discovering photography was a new rabbit hole for me. My most common subjects are landscapes and my children on days out through a Canon M5, EF-m 32mm or EF 70-200.</p>
        </div>
      </div>
    </div>
    
    <div class="box">
      <div class="columns">
        <div class="column">
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/track_nhjeyc.png" />
        </div>
        <div class="column">
          <p class="title is-5">Mechanic / Car Enthusiast</p>
          <p class="subtitle is-6">A decade ago I picked up a battered MX5 with the aim to learn how to look after vehicles. It's since enjoyed multiple trackdays and passed nearly every MOT.</p>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="columns">
        <div class="column">
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632778/portfolio/sisters_osbq4r.jpg" />
        </div>
        <div class="column">
          <p class="title is-5">Painter</p>
          <p class="subtitle is-6">Painting Games Workshop figures and enjoying the different settings has long caused my desk to be covered in paint, bits of metal or plastic.</p>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="columns">
        <div class="column">
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1624047273/portfolio/headphones-small_ir0fgb.jpg" />
        </div>
        <div class="column">
          <p class="title is-5">Gamer</p>
          <p class="subtitle is-6">If I can tear myself away from a coding project I can also be found enjoying cooperative or team based PC or board games.</p>
        </div>
      </div>
    </div>
    

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
#hero {
  border-radius:5px;
}
.box{
  width: 85%;
  margin: auto;
  border-radius: 5px;
}

img {
  opacity: 0.5;
  border-radius: 5px;
}

img:hover {
  opacity: 1;
}
</style>

