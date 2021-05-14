<template>
  <div>
    <section class="hero is-link">
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

</style>
