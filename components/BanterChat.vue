<template>
    <!-- eslint-disable -->
      <div id="banter">
        <div class="button_wrapper">
            <div class="message" v-on:click="toggleChat"><p>50+ people have posted about the new ABC Sunscreen in the past hour!</p></div>
        </div>
        <transition name="fade">
            <div class="iframe_wrapper" v-if="chatToggled">
                <BanterChatWindow v-bind:bgColor="bgColor"  v-bind:productURL="'https://main.d2t6w6lnr5vdz5.amplifyapp.com/banter/?brand_id=' + brand_id + '&product_id=' + product_id + '&chatWindowBgColor=' + chatWindowBgColor + '&bgColor=' + bgColor + '&chatWindowMessageColor=' + chatWindowBgColor" v-bind:clientHeight="clientHeight" v-bind:clientWidth="clientWidth" />
            </div>
        </transition>
    </div>
    </template>
<script>
/* eslint-disable */

import BanterChatWindow from "@/components/BanterChatWindow.vue"
    
export default {
    name: 'BanterChat',
    head () {
        return {
            title: 'Banter Chat Component',
    
        }
        },

    props: {
        brand_id: null,
        product_id: null,
        bgColor: 'gray',
        messageBgColor: 'gray',
        messageBgColorHover: null,
        chatWindowBgColor: 'gray',
        chatWindowMessageColor: 'lightgray',
    },
    components: {
        BanterChatWindow,
    },
    
    watch: {

    },
    
    data () {
    return {
        clientHeight: null,
        clientWidth: null,
        chatToggled: false,
    }
    },

    computed: {

    },
    
    
    mounted: function() {
        this.$data.clientHeight = window.innerHeight;
        this.$data.clientWidth = window.innerWidth / 4;

        // set plugin window width
        this.onResize();
        // window.addEventListener('resize', this.onResize);
        document.getElementById("banter").style.width = String(this.$data.clientWidth) + "px";
        document.getElementById("banter").style.height = String(this.$data.clientHeight) + "px";
        console.log("height = ", this.$data.clientHeight)
        
        // set up detection for clicks outside of plugin (to close it)
        var self = this;
        function hideOnClickOutside(element) {
            const outsideClickListener = event => {
                if (!element.contains(event.target) && self.isVisible(element)) { // or use: event.target.closest(selector) === null
                    console.log("clicked outside of element");
                    if (self.chatToggled){
                        self.toggleChat();
                    }
                }
            }

            document.addEventListener('click', outsideClickListener);
        }

        hideOnClickOutside(document.getElementById("banter"));

        // apply user style presets
        var messages = document.getElementsByClassName("message");
        for (var i = 0; i < messages.length; i++){
            messages[i].style.backgroundColor = this.$props.messageBgColor;
        }

        // show element after styles have been applied 
        document.getElementById("banter").style.display = "block";

    

    },

    beforeDestroy() {
        
    },

    methods: {

        // helper function for detecting clicks outside of plugin 
        isVisible: function(elem){
            return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length ); 
        },

        // helper function for resizing plugin window
        onResize: function(){

            let isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

            if (!isMobile){
                this.clientHeight = window.innerHeight;
                this.clientWidth = window.innerWidth / 4;

            }

            else {
                this.clientHeight = window.innerHeight;
                this.clientWidth = (window.innerWidth / 3) * 2;
            }

            if (this.$data.chatToggled){
                this.resizeChat();
            }
            
        },

        // helper function for resizing plugin window
        resizeChat: function() {
            document.getElementById("iframe").width = this.$data.clientWidth;
            document.getElementById("iframe").height = this.$data.clientHeight;
        },

        // helper function for toggling chat, loading 'slide in' animation
        toggleChat: function() {
            this.$data.chatToggled = !this.$data.chatToggled;
            var message = document.getElementsByClassName("message")[0];
            
            if (this.$data.chatToggled){
                message.style.marginLeft = String(this.$data.clientWidth * 1.2) + "px";
            }
            else {
                message.style.marginLeft = "0px";
            }

        },

    
    }
}
</script>

<style scoped lang="scss">

#banter {
    position: fixed;
    right: 0;
    top: 0;
    display: none;
}

.message {
    width: 12rem;
    background-color: $message-bg-color;
    padding: 1rem;
    border-radius: 10px;
    margin-left: 0px;
    margin-top: 2rem;

    -webkit-transition: margin-left 0.25s ease ;
    -moz-transition: margin-left 0.25s ease ;
    -ms-transition: margin-left 0.25s ease;
    -o-transition: margin-left 0.25s ease;
    transition: margin-left 0.25s ease;

}

.iframe_wrapper {
    position: absolute;
    top: 0;
    z-index: -1;
    margin-left: 0px;

}

.message:hover {
    cursor: pointer;
}


.fade-enter-active, .fade-leave-active {
  transition: margin-left 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  margin-left: 200%; // 200% to guarantee that message slides across on all devices
}


</style>
