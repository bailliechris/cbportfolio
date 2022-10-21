<template>
  <div class="card" v-on:click="flip_clicked">
    <header>
      <img 
        :src="project_img"
        :alt="project_title"
        v-on:click="flip_clicked" 
      />
      <section>
        <p class="title is-5">{{project_title}}</p>
        <p class="subtitle">{{project_tech}}</p>
        <p><a :href="button_link" target="_blank">Try it!</a></p>
      </section>
    </header>
    <footer v-if="clicked">
      <p class="subtitle">{{project_text}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TheProject",
  props: {
    project_title: String,
    project_text: String,
    project_tech: String,
    project_img: String,
    button_link: String
  },
  data() {
    return {
      clicked:false
    }
  },
  methods: {
    flip_clicked: function() {
      this.clicked = !this.clicked;
    }
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
