<template>
    <!-- eslint-disable -->
      <div class="banter_window">
        <!-- <div id="iframe"></div> -->
        <iframe id="iframe" v-bind:src="productURL" title="plugin" frameborder="0" scrolling="yes"  ></iframe>
      </div>
    </template>
<script>
/* eslint-disable */
    
export default {
    name: 'BanterChatWindow',
    head () {
        return {
            title: 'Banter Chat Window Component',
    
        }
        },

    props: {
        clientHeight: null,
        clientWidth: null,
        productURL: null,
        bgColor: null,

    },
    components: {
    },
    
    watch: {

    },

    mounted: function() {
        this.resizeChat();

         // apply user style presets
         var bw = document.getElementsByClassName("banter_window");
        for (var i = 0; i < bw.length; i++){
            bw[i].style.backgroundColor = this.$props.bgColor;
        }



    },
    
    data () {
    return {
    }
    },
    

    methods: {


        resizeChat: function() {
            document.getElementById("iframe").width = this.$props.clientWidth;
            document.getElementById("iframe").height = this.$props.clientHeight;
        },
    

    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

iframe {
    overflow-x: hidden;
    overflow-y: scroll;
    // width: 100%;
    // height: 100%;

}

.banter_window {
    background-color: $bg-color;

}



</style>
