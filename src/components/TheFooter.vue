<template>
  <div>
    <b-navbar>
        <template #end>
            <b-navbar-item 
                tag="router-link" 
                :to="{path: '/tos'}">
                Terms of Service
            </b-navbar-item>
            <b-navbar-item 
                tag="router-link" 
                :to="{path: '/pp'}">
                Privacy Policy
            </b-navbar-item>
        </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  props: {

  }
};
</script>

<style>

</style>
