/* eslint-disable */

import noEnvInContext from "eslint-plugin-nuxt/lib/rules/no-env-in-context";

export default function ({ app }) {



  app.nuxt.error = async (args) => {



    //const close_error = () => document.getElementById("nuxt_error").remove();

    const node = document.createElement("div");
    node.style.backgroundColor = '#282424';
    node.style.border = '0.1px solid #DDD0D0';
    node.style.boxShadow = '10px 10px #161414 // $darkest';
    node.style.position = 'fixed';
    node.style.left = '50%';
    node.style.marginLeft = '-15vw';
    node.style.top = '15vh';
    node.style.width = '30vw';
    node.style.padding = '1vw';
    node.style.fontFamily = '"Menlo", Courier';
    node.id = "nuxt_error"
    node.innerHTML = `
    <span><p style='float:right; margin-top:-0.75vh;'>X</p><p style='margin-top:2.5vh;'>❌ ${args} - Please contact us if the issue persists</p></span>`;

    let isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
    if (isMobile) {
      node.style.left = '0vh';
      node.style.marginLeft = '10vw';
      node.style.marginRight = '10vw';
      node.style.width = '80vw';
    }


    document.getElementById("app").appendChild(node);
    //await delay(7500);
    //node.remove();

    node.addEventListener('click', function () { document.getElementById("nuxt_error").remove() })

    /*
    function close_error() {
      document.getElementById("nuxt_error").remove()
      //node.remove();
    }
    */



  }





}

/*
const close_error = () => document.getElementById("nuxt_error").remove();


const delay = ms => new Promise(res => setTimeout(res, ms));
*/