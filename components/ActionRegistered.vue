<template>
  <!-- eslint-disable -->
  <div class="popup" v-on:click="hideActionRegister">
    <p class="popupClose">X</p>
    <span
      ><p class="popupText">{{ icon }} {{ text }}</p></span
    >
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
export default {
  name: 'ActionRegistered',
  props: {
      icon: null,
      text: null,
      ar_id: null,
  },

  updated: function () {
    console.log("just got updated in actionRegistered with", this.$props.text, this.$props.icon);
  },



  methods: {
    hideActionRegister(){
      //document.querySelector('#' + this.$data.current_component_id)
      $("#" + this.$props.ar_id).toggle(200);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup {
  background-color: #282424;
  border: 0.1px solid #DDD0D0;
  box-shadow: 10px 10px;
  position: fixed;
  left: 50%;
  margin-left: -15vw;
  top: 14vh;
  width: 30vw;
  padding: 1vw;
}

.popup:hover {
  /*background-color: #E9E9E9; */
  cursor: pointer;
}

.popupText {
  font-family: "Menlo", monospace;
}

.popupClose {
  font-family: "Menlo", monospace;
  /*position: absolute;*/
  float: right;
  margin-top: -1vh;
}

.popupClose:hover {
  cursor: pointer;
}

/* PHONE STYLING */
@media only screen and (max-width: 600px) {

  .popupClose {
    margin-top: -1vw;
  }
  
  .popup {
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    left:0vh;
    top:20vh;
  }

}
</style>
