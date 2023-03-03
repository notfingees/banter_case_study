/* eslint-disable */

export default function ({ route, redirect }) {
  if (route.path !== '/' && route.path.endsWith('/')) {
    const { path, query, hash } = route;
    const nextPath = path.replace(/\/+$/, '') || '/';
    const nextRoute = { path: nextPath, query, hash };

    redirect(nextRoute);
  }
}







/*
const close_error = () => document.getElementById("nuxt_error").remove();


const delay = ms => new Promise(res => setTimeout(res, ms));
*/