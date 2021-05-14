<template>
  <div class="home">
    
    <TheTitle title="Privacy Policy" subtitle="We promise..." />

    <section id="textblock">
      <p>
          Some projects linked here offer you to create an account. You should not enter sensitive data into any project.
      </p>
      <p>
          You will use appropriately detailed passwords (a mix of lower case, capital letters, numbers and symbols of at least 8 characters) and you will not share your passwords elsewhere.
      </p>
      <p>
          We agree to look after your data and keep it safe.
      </p>
    </section>
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