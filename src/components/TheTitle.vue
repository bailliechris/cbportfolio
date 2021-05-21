<template>
  <div>
    <section id="hero" class="hero is-dark">
      <div class="hero-body">
        <p class="title">
          {{title}}
        </p>
        <p class="subtitle">
          <span id="subcolour">{{subtitle}}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TheTitle",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style scoped>
#hero {
  border-radius:5px;
}

</style>
