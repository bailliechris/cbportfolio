<template>
  <div>
    <div id="project" class="box" v-on:click="flip_clicked" >
      <div class="columns">
        <div class="column is-3">
            <img 
              :src="project_img"
              :alt="project_title"
              v-on:click="flip_clicked" 
              id="image_area"
              />
        </div>
        <div class="column">
          <p class="title is-5">{{project_title}}</p>
          <p class="subtitle">{{project_tech}}</p>
          <p><a :href="button_link" target="_blank">Try it!</a></p>
        </div>
      </div>
      <div v-if="clicked">
        <div class="columns">
          <div class="column is-full">
            <p class="subtitle">{{project_text}}</p>
          </div>
        </div>
      </div>
    </div>
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
#project{
   box-shadow: 0 rgba(127, 127, 127, .5);
   transition: box-shadow 2s;
}
#project:hover{
   box-shadow: 5px 5px 5px -2px rgba(127, 127, 127, .5);
}
#image_area{
  opacity:0.5;
  justify-content: center;
  align-content: center;
  transition: transform 1s;
}
#image_area:hover{
  opacity:1;
  transform: scale(1.1);
}
</style>
