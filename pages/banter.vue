<template>
  <!-- eslint-disable -->
  <div id="app">
    <div class="bcm_wrapper">
      <div v-for="message, index in loaded_messages" class="bcm">
        <BanterChatMessage v-bind:chatWindowMessageColor="chatWindowMessageColor" v-bind:user_id="message.id" v-bind:message_body="message.message" v-bind:timestamp="message.timestamp"/>
      </div>
    </div>
    <div class="send_message">
      <textarea v-model="user_message"></textarea>
      <button v-on:click="send_message">Upload</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import BanterChatMessage from '@/components/BanterChatMessage.vue'
import $ from "jquery";

export default {
  name: 'index',
  head: {
    title: 'In Writing: Text NFTs',
    meta: [
     {hid: 'description', name: 'description', content: "Write any text you want as an NFT on In Writing.  We're the first decentralized text NFT marketplace with complete transparency and no fees."},
     {hid: 'og:title', property: 'og:title', content: 'In Writing, the text NFT marketplace'},
    ],
  },

  components: {
    BanterChatMessage,

  },
  data () {
    return {
      product_id: null,
      brand_id: null,
      user_message: "",
      limit: 20,
      loaded_messages: [],

      chatWindowBgColor: null,
      chatWindowMessageColor: null,
      bgColor: null,

    }
  },


  methods: {

    send_message: function() {
      var url = "https://inwritingapi.com/personal_portfolio/add_message.php";
      var self = this;
      $.post(
        url,
        { brand_id: this.$data.brand_id,
        product_id: this.$data.product_id,
        message: this.$data.user_message,
      },
        function (data) {
          if (data[0]){
            self.loaded_messages.unshift({id: "You", brand_id: self.brand_id, product_id: self.product_id, message: self.user_message, timestamp: "Just now"})
          }
          else {
            alert("Error submitting review");
          }
        },
        "json"
      );

    },

    get_messages: async function() {
      var url = "https://inwritingapi.com/personal_portfolio/get_messages.php";
      var self = this;
      $.post(
        url,
        { brand_id: this.$data.brand_id,
        product_id: this.$data.product_id,
        limit: this.$data.limit,
      },
        function (data) {
          self.loaded_messages = data;
          // console.log("get messages", data)
        },
        "json"
      );

    },



  },

  created: function () {
    this.$data.product_id = this.$nuxt.$route.query.product_id;
    this.$data.brand_id = this.$nuxt.$route.query.brand_id;
    this.$data.bgColor = this.$nuxt.$route.query.bgColor;
    this.$data.chatWindowBgColor = this.$nuxt.$route.query.chatWindowBgColor;
    this.$data.chatWindowMessageColor = this.$nuxt.$route.query.chatWindowMessageColor;
  },
  mounted: function () {

    this.get_messages();

    // apply user style presets
    var messages = document.getElementsByClassName("send_message");
        for (var i = 0; i < messages.length; i++){
            messages[i].style.backgroundColor = this.$data.bgColor;
        }

    document.getElementById("app").style.backgroundColor = this.$data.bgColor;

     // show element after styles have been applied 
     document.getElementById("app").style.display = "block";

    
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


p { color: $red;}

#app {
  background-color: $bg-color;
  display: none;
  

}

.bcm_wrapper {
  margin: 1rem;
}

.send_message {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0;
  gap: 2rem;

  // keeping it at the bottom
  position: fixed;
  background-color: $bg-color;
  width: 90%;
  bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

textarea {
  width: 100%;
}

@media only screen and (min-width: 601px) {

}

@media only screen and (min-width: 601px) and (orientation: portrait) {

}

/* PHONE STYLING */
@media only screen and (max-width: 600px) {
 
}
</style>
