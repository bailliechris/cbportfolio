<template>
  <div class="home">
    
    <TheTitle title="Terms of Service" subtitle="Stuff you should do..." />

    <section id="textblock">
        <p>
            You agree to be good, not a plum.
        </p>
        <p>
            We agree to do the same.
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