<template>
  <!-- eslint-disable -->
  <div id="app">

    <img src="@/assets/depop.png">
    <BanterChat
      v-bind:brand_id="2"
      v-bind:product_id="1"
      v-bind:bgColor="'white'"
      v-bind:messageBgColor="'red'"
      v-bind:messageBgColorHover="'red'"
      v-bind:chatWindowBgColor="'red'"
      v-bind:chatWindowMessageColor="'gray'"
    />
  </div>
</template>

<script>
/* eslint-disable */


import BanterChat from '@/components/BanterChat.vue'

export default {
  name: 'image_storefront',
  head: {
    title: 'Banter Case Study',
    meta: [
     {hid: 'description', name: 'description', content: "Banter founding engineer chat bot - type plugin case study"},
     {hid: 'og:title', property: 'og:title', content: 'Banter Case Study (image background)'},
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

img {
  width: 100%;
  height: 100%;
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
