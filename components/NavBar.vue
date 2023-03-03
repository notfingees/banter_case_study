<template>
  <!-- eslint-disable -->

  <div class="navbar">
    <div class="navbar-mobile">
   
      <p class="navbar_icon" v-on:click="toggleNavbarMobile">☰</p>
      <div v-if="show_navbar_mobile" class="navbar-inner">
        <NuxtLink class="navbar-link" to="/">Home</NuxtLink>
        <NuxtLink class="navbar-link" to="/">Buy</NuxtLink>
        <NuxtLink class="navbar-link" to="/">About</NuxtLink>
        <NuxtLink class="navbar-link" to="/">Cart</NuxtLink>
      </div>
    </div>

    <div class="navbar-desktop">
      <div class="promotional">
        🎉 To celebrate our launch, get your first text NFT for free with no gas
        or minting fees.
        <NuxtLink class="promotional-link" to="/write"
          >Just click here! 🎉</NuxtLink
        >
      </div>
      <div class="navbar-inner">
        <NuxtLink class="brand" to="/">Test Website</NuxtLink>

        <div class="navbar-icons">
          <NuxtLink class="navbar-link" to="/">Buy</NuxtLink>
          <NuxtLink class="navbar-link" to="/">About</NuxtLink>
          <NuxtLink to="/account"
            ><img alt="Account icon" src="@/assets/user-solid-light.svg"
          /></NuxtLink>
          <img
            alt="Wallet icon"
            src="@/assets/wallet-solid-light.svg"
            v-on:click="getWallet"
          />
        </div>
      </div>
    </div>

    <!--<b-navbar-brand class = "navbar-text" href="../home">In Writing</b-navbar-brand>
        <b-navba class = "navbar-text" href="../home"><i class="fas fa-wallet"></i></b-navbar-brand>
        <i class="fas fa-wallet"></i>
        <p> Hello!!!</p>
    </b-navbar>
    -->

    <ActionRegistered
      id="actionRegisteredNavBar"
      class="actionRegistered"
      v-bind:text="action_register_text"
      v-bind:icon="action_register_icon"
      v-bind:ar_id="'actionRegisteredNavBar'"
    />
  </div>
</template>

<script>
/* eslint-disable */
import ActionRegistered from "@/components/ActionRegistered.vue";
import $ from "jquery";
export default {
  name: "NavBar",
  components: {
    ActionRegistered,
  },
  data() {
    return {
      accounts: [],
      current_address: null,

      action_register_text: null,
      action_register_icon: null,

      show_navbar_mobile: false,
    };
  },
  methods: {
    manageActionRegister(icon, message) {
      // Popup management
      this.$data.action_register_text = message;
      this.$data.action_register_icon = icon;
      $("#actionRegisteredNavBar").toggle(200);
    },

    toggleNavbarMobile() {
      this.$data.show_navbar_mobile = !this.$data.show_navbar_mobile;
    },

    async getWallet() {
      //window.ethereum.request({ method: 'eth_requestAccounts' });

      const self = this;

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("accounts is", accounts);
        self.accounts = accounts;
        self.current_address = accounts[0];
        console.log("Current wallet address is " + self.current_address);
        this.manageActionRegister(
          "✅",
          "Wallet successfully connected."
        );
      } catch (e) {
        this.manageActionRegister(
          "❗️",
          "Error with connecting your wallet. Please try again and check console for more details."
        );
        console.log(e);
      }

      this.$emit("get-wallet", this.$data.current_address);

      //this.$emit('updateGlobalCurrentAddress', accounts[0]);

      // register account if doesn't already exist

      $.post(
        "https://inwritingapi.com/inwriting_mumbai/add_user.php",
        { address: this.$data.current_address },
        function (data) {
          console.log("Adding user returned " + data);
        },
        "json"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.actionRegistered {
  display: none;
}

.promotional {
  background-color: #161414;
  font-family: "Proxima Nova", Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}

.promotional-link {
  text-decoration: underline;
}

.promotional, .promotional-link {
  color: #DDD0D0;
}

.promotional-link:hover {
  color: #DDD0D0;
}

@media only screen and (min-width: 601px) {
  .promotional {
    padding: 0.75vw;
    margin-top: -2vh;
    margin-bottom: 1vh;
    font-size: 1vw;
  }

  .promotional-link {
    font-size: 1vw;
  }

  .navbar-mobile {
    display: none;
  }

  i {
    position: absolute;
    top: 0;
    right: 0;
    width: 20vw;
    font-size: 10vw;
  }

  .navbar {
    z-index: 6;

    position: fixed;
    top: 0vw;
    width: 100%;
    height: auto;
    background-color: #282424;
    padding-top: 2vh;
  }
  .navbar-inner {
    display: flex;
    gap: 55vw;
    height: 6vh;
  }
  .navbar-icons {
    display: flex;
    gap: 3vw;
  }
  .brand {
    color: #DDD0D0;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.75vw;
    margin-left: 2vw;
  }
  .navbar-link {
    color: #DDD0D0;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.3125vw;
    position: relative;
    top: 0.75vh;
  }

  img {
    height: 1.75vw;
    width: auto;
    top: 0.75vh;
    position: relative;
  }
}

/* tablet styling */
@media only screen and (min-width: 601px) and (orientation: portrait) {
  .navbar-inner {
    justify-content: space-between;
  }

  .navbar-icons {
    width: 20vw;
    justify-content: space-between;
    padding-right: 8vw;
  }

  .promotional,
  .promotional-link {
    font-size: 2vw;
  }

  .promotional {
    padding: 1vh;
  }
}

/* phone styling */
/* @media only screen and (max-width: 600px) { */
@media only screen and (max-width: 600px) {

  .promotional {
    margin-top: -2vh;
    padding: 1vh;
  }
  .navbar-desktop {
    display: none;
  }

  .navbar {
    position: fixed;
    top: 0vw;
    width: 100vw;
    height: auto;
    background-color: #282424;
    padding-top: 2vh;
  }

  .navbar-inner {
    display: block;
    padding-left: 10vw;
    padding-right: 10vw;
    background-color: #282424;
    padding-bottom: 2.5vh;
    padding-top: 5vh;
    margin-top: -7vh;
    height: auto;
  }

  .navbar_icon {
    font-size: 12vw;
    line-height: 0vh;
    text-align: right;
    padding-right: 10vw;
  }

  .brand {
    color: #DDD0D0;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 6vw;
    margin-left: 2vw;
    width: auto;
    margin-top: 0.3vh;
  }
  .navbar-link {
    color: #DDD0D0;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 6vw;
    position: relative;
    top: 0vh;
    display: block;
    text-align: left;
  }

  img {
    height: 2.33vw;
    width: auto;
    top: 0vh;
    position: relative;
    padding-left: 3vw;
  }

  .titlediv {
    margin: auto;
    width: 100%;
    padding-top: 20vw;
  }
}
</style>
