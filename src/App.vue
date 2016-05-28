<template>
  <div>
    <header-view></header-view>

    <div class="content-container">

      <carousel>
        <slider>
          <img src="assets/img/intro-1.jpg">
        </slider>
        <slider>
          <img src="assets/img/intro-2.jpg">
        </slider>
      </carousel>

      <div class="router-view">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import headerView from './views/layout/header.vue'
  var carousel = require('vue-strap').carousel
  var slider = require('vue-strap').slider

  export default {
    data () {
      return {
        authenticating: false
      }
    },
    computed: {
      isLoginPage() {
        return this.$route.path.indexOf('/login') > -1;
      }
    },
    components: {
      headerView,
      carousel,
      slider
    }
  }
</script>
