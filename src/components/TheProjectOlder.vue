<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img            
          :src="project_img"
          :alt="project_title"
          v-on:click="flip_clicked" 
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">
            <a :href="button_link">
              {{project_title}}
            </a>
          </p>
        </div>
      </div>

      <div v-if="clicked">
        <div class="content">
          {{project_text}}
          <br>
          <a :href="button_link" target="_blank"><strong>Try it!</strong></a>
        </div>
        <header class="card-header">
          <p class="card-header-title is-centered">
            {{project_tech}}
          </p>
        </header>
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
a {
  text-decoration: none;
}
img {
  opacity: 0.5;
  border-radius: 5px;
  max-width: 50%;
  height: auto;
}

img:hover {
  opacity: 1;
}

@media only screen and (min-width: 768px) 
{  
  img {
    opacity: 0.5;
    border-radius: 5px;
    max-width: 300px;
    height: auto;
  }
}
</style>
