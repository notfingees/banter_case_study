<template>
  <!-- eslint-disable -->
  <div id="app">
    <h1>Example Storefront</h1>

    <div class="products_wrapper">

      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
      <div class="product"></div>
    </div>

    <BanterChat
      v-bind:brand_id="1"
      v-bind:product_id="1"
      v-bind:bgColor="'gray'"
      v-bind:messageBgColor="'gray'"
      v-bind:messageBgColorHover="'lightgray'"
      v-bind:chatWindowBgColor="'lightgray'"
      v-bind:chatWindowMessageColor="'gray'"
    />
  </div>
</template>

<script>
/* eslint-disable */


import BanterChat from '@/components/BanterChat.vue'

export default {
  name: 'index',
  head: {
    title: 'Banter Case Study',
    meta: [
     {hid: 'description', name: 'description', content: "Banter founding engineer chat bot - type plugin case study"},
     {hid: 'og:title', property: 'og:title', content: 'Banter Case Study'},
    ],
  },

  components: {
    BanterChat,
  },
  data () {
    return {
      
    }
  },
  created: function () {
    // `this` points to the vm instance


  },

  methods: {



  },
  mounted: function () {

    
  }
}
</script>
<style>
body {
  margin: 0 !important;
}
</style>


<style scoped lang="scss">


@font-face {
  font-family: "Proxima Nova Medium";
  src: local("Proxima Nova Medium"),
    url(~/assets/ProximaNovaMedium.ttf) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Proxima Nova";
  font-weight: bold;
  src: local("Proxima Nova Extra Condensed"),
    url(~/assets/ProximaNovaExtraCondensed.ttf) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Menlo";
  src: local("Menlo"), url(~/assets/Menlo.ttf) format("truetype");
  font-display: swap;
}

.products_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5rem;
}

.product {
  width: 20rem;
  height: 20rem;
  background-color: lightgray;
}

p { color: $red;}

@media only screen and (min-width: 601px) {

}

@media only screen and (min-width: 601px) and (orientation: portrait) {

}

/* PHONE STYLING */
@media only screen and (max-width: 600px) {
 
}
</style>
