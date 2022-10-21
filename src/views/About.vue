<template>
  <div class="home">

    <TheTitle title="About" subtitle="Other things I do..." />

    <br />

    <div class="card">
      <header>
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/child_hohuui.png" />
        <section>
          <p class="title is-5">Photographer</p>
          <p class="subtitle is-6">I always enjoy learning new things, so discovering photography was a new rabbit hole for me. My most common subjects are landscapes and my children on days out through a Canon M5, EF-m 32mm or EF 70-200.</p>
        </section>
      </header>
    </div>

    <br />
    
    <div class="card">
      <header>
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/track_nhjeyc.png" />
        <section>
          <p class="title is-5">Mechanic / Car Enthusiast</p>
          <p class="subtitle is-6">A decade ago I picked up a battered MX5 with the aim to learn how to look after vehicles. It's since enjoyed multiple trackdays and passed nearly every MOT.</p>
        </section>
      </header>
    </div>

    <br />

    <div class="card">
      <header>
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621632778/portfolio/sisters_osbq4r.jpg" />
        <section>
          <p class="title is-5">Painter</p>
          <p class="subtitle is-6">Painting Games Workshop figures and enjoying the different settings has long caused my desk to be covered in paint, bits of metal or plastic.</p>
        </section>
      </header>
    </div>

    <br />

    <div class="card">
      <header>
          <img width="300" src="https://res.cloudinary.com/dzqp95iuv/image/upload/v1624047273/portfolio/headphones-small_ir0fgb.jpg" />
        <section>
          <p class="title is-5">Gamer</p>
          <p class="subtitle is-6">If I can tear myself away from a coding project I can also be found enjoying cooperative or team based PC or board games.</p>
        </section>
      </header>
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

<style scoped>
div.card{
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px --2px rgba(127, 127, 127, .5);
  transition: box-shadow 2s;
  padding: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #666;
}
div.card:hover{
   box-shadow: 5px 5px 5px -2px rgba(127, 127, 127, .5);
}
header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
  align-items: center;
}
header section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p:first-child {
  font-weight: bolder;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  opacity:0.5;
  transition: transform 1s;
  width: 100%;
  border-radius: 0.5em;
}
img:hover{
  opacity:1;
  transform: scale(1.1);
}
</style>

