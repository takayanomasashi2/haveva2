<template>
  <div class="page-wrapper">
    <!-- <app-nav /> -->
    <!-- <main> -->
    <Nav />
      <nuxt />
      <SearchPopup />
      <Footer />
    <!-- </main> -->
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";
import SearchPopup from "~/components/SearchPopup";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  components: {
    AppFooter,
    AppNav,
    SearchPopup,
    Nav,
    Footer,
  },
  head() {
    return {
      title: "Agrikol - Vue Nuxt Template for Agriculture Farm & Farmers",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style scoped>
body {
  border: 10px solid #ccc;
  min-height: 100vh;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

main {
  padding: 0;
  width: 95vw;
  margin-left: 2vw;
}

@media screen and (min-width: 1000px) {
  main {
    padding: 40px;
    width: 80vw;
    margin-left: 7vw;
  }
}
</style>
