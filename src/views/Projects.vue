<template>
  <div>
    
    <TheTitle title="Projects" subtitle="Click the images for more details..." />

    <br />

    <TheProject 
      project_title="Instant Messenger with Dice Bot" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/rpgmessenger_jimyhr.jpg"
      project_tech="Vue, WebSockets, Buefy, NodeJS, Express"
      project_text="After Discord dice bot failed us and prevented an RPG session, I created this as a backup. We liked being able to add modifiers to dice rolls, so I wrote algorithms to parse instructions like !4d10+5 which will roll 4, 10 sided dice and add 5 to the total."
      button_link="https://suspicious-nobel-3a5d20.netlify.app"
      />

    <br />

    <TheProject 
      project_title="Keyword Quiz" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280577/portfolio/quiz_uvgmjv.jpg"
      project_tech="Vue, Vuex, MongoDB, Axios, Buefy"
      project_text="A Fullstack solution that uploads results to MongoDB. Clients requested a low-stakes quiz system that could be accessed from iPads, PCs and mobiles. Simple enough to be used by GCSE students and techophobe staff."
      button_link="https://wonderful-kowalevski-d77ec1.netlify.app"
      />

    <br />

    <TheProject 
      project_title="Keyword Quiz Admin Console" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/quiz-admin_kv09yu.jpg"
      project_tech="Vue, MongoDB, Axios, Buefy, JWT Auth, NodeJS, Express"
      project_text="I wanted to make an interface that would be easier for staff to interpret and filter results of the quizzes. Username: checker Password: jalop"
      button_link="https://blissful-williams-04230a.netlify.app"
      />

    <br />

    <TheProject 
      project_title="Behind the Wheel" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1624047403/portfolio/driving-school-small_be5weh.jpg"
      project_tech="Vue, MongoDB, Axios, Buefy, JWT Auth, NodeJS, Express"
      project_text="A client starting out as a driving instructor requested a site to be viewed predominently on mobiles but editable on desktop."
      button_link="https://brave-lichterman-d892ab.netlify.app/"
      />

    <br />
        
    <TheProject 
      project_title="Tourism App" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1621280578/portfolio/travel_npz83b.jpg"
      project_tech="React, Redux, React-Router, Materials UI"
      project_text="Having followed a guide to Vue-Router I elected to create it using React instead."
      button_link="https://amazing-almeida-c4bf7d.netlify.app/"
      />

    <br />

    <TheProject 
      project_title="Make Your Own Website" 
      project_img="https://res.cloudinary.com/dzqp95iuv/image/upload/v1624047404/portfolio/make-your-own-small_kzql1b.jpg"
      project_tech="HTML, CSS, Javascript"
      project_text="Some DOM abuse to allow for an interactive user experience."
      button_link="https://hungry-tereshkova-b9f0d1.netlify.app/"
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

<style scoped>


</style>