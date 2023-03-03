<template>
  <!-- eslint-disable-->
  <div class="banter_message">
    <div class="wrapper">
      <div class="heading">
        <p id="user">User {{ user_id }}</p>
        <p id="timestamp">{{ timestamp }}</p>
      </div>
      <div class="body">
        <p id="body_text">{{  message_body  }}</p>
      </div>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AboutSection',
  props: {
      user_id: null,
      message_body: null,
      timestamp: null,
      chatWindowMessageColor: null,
  },
  mounted: function() {

    // apply user style presets
    var messages = document.getElementsByClassName("banter_message");
        for (var i = 0; i < messages.length; i++){
            messages[i].style.backgroundColor = this.$props.chatWindowMessageColor;
            messages[i].style.display = "block";
        }


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.heading {
  display: flex;
  justify-content: space-between;
}

.banter_message {
  border-radius: 10px;
  background-color: $chat-window-message-color;
  display: none;
}

.wrapper {
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

#user {
  font-weight: bold;
}

#timestamp {

}

#body_text {

}
  
@media only screen and (min-width: 601px) {
  

}

@media only screen and (max-width: 600px) {
 

}
</style>
