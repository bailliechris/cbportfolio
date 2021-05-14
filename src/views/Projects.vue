<template>
  <div class="home">
    
    <TheTitle title="Projects" subtitle="Things I've been working on..." />

    <TheProject 
      project_title="Instant Messenger with Dice Bot" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1620938919/portfolio/rpgmessenger_mip1qs.jpg"
      project_tech="Vue, WebSockets, Buefy, NodeJS, Express"
      project_text="After Discord dice bot failed us and prevented an RPG session, I created this as a backup. We liked being able to add modifiers to dice rolls, so I wrote algorithms to parse instructions like !4d10+5 which will roll 4, 10 sided dice and add 5 to the total."
      button_link="https://suspicious-nobel-3a5d20.netlify.app"
      />

    <TheProject 
      project_title="Keyword Quiz" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1620938919/portfolio/quiz_vxp0hj.jpg"
      project_tech="Vue, Vuex, MongoDB, Axios, Buefy"
      project_text="Frequent recall low stakes quizzes have been shown to aid pupils long term memory. So I created a solution that could create multi-choice questions from keyterms and definitions. It's main aim was to be easily used by pupils and shared easily by staff"
      button_link="https://wonderful-kowalevski-d77ec1.netlify.app"
      />
    
    <TheProject 
      project_title="Keyword Quiz Admin Console" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1620938919/portfolio/quiz-admin_quwhai.jpg"
      project_tech="Vue, MongoDB, Axios, Buefy, JWT Auth, NodeJS, Express"
      project_text="I wanted to make an interface that would be easier for staff to interpret and filter results of the quizzes."
      button_link="https://blissful-williams-04230a.netlify.app"
      />

    <TheProject 
      project_title="Tourism App" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1620938919/portfolio/travel_yropeu.jpg"
      project_tech="React, Redux, React-Router, Materials UI"
      project_text="Having followed a guide to Vue-Router I elected to create it using React intsead."
      button_link="https://amazing-almeida-c4bf7d.netlify.app/"
      />
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import TheTitle from "@/components/TheTitle.vue";
import TheProject from "@/components/TheProject.vue";

export default {
  name: "Home",
  components: {
    TheTitle,
    TheProject
  },  
  data() {
    return {

    };
  }
};
</script>