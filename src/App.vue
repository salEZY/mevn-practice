<template>
  <div id="app">
    <NavBar />
    <div id="app-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer
  },
  beforeCreate: function() {
    this.$store.dispatch("authenticate");
  }
};
</script>
