<template>
  <div id="app">
    <app-header />
      <router-view/>
    <app-footer />
  </div>
</template>

<script>
// HEADER
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
html, body, figure, img, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul,li, a{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
</style>
