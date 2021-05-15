<template>
  <div>
    <div class="box">
      <div class="columns">
        <div class="column is-narrow">
          <div style="width: 200px;">
            <img 
              :src="project_img"
              :alt="project_title"
              v-on:click="flip_clicked" 
              />
          </div>
        </div>
        <div class="column">
          <p class="title is-5">{{project_title}}</p>
          <p class="subtitle">{{project_tech}}</p>
        </div>
      </div>
      <div v-if="clicked">
        <div class="columns">
          <div class="column is-full">
            <p class="subtitle">{{project_text}}</p>
            <p><a :href="button_link" target="_blank">Try it!</a></p>
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

</style>
