<template>
  <header class="title">
    <h1 class="main-title">{{title}}</h1>
    <span class="sub">{{subtitle}}</span>
  </header>
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

header.title {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 15em;
  background-color: black;
  border-radius: 0.5em;
}

header h1.main-title {
  font-size: 4em;
  color: white;
  font-weight: bolder;
}

header span.sub {
  color: white;
}

</style>
