# Banter Plugin Case Study

## How to Implement 

‘Plugin’ would work on any website by just importing my code as a Node module and loading the chatbot component/plugin like so:

```
<BanterChat
      v-bind:brand_id="2" // Brand’s ID (internal to Banter, e.g. Prada is brand_id 1, GAP is brand_id 2)
      v-bind:product_id="1" // ID of a specific product (required to fetch reviews for that specific product) — could allow product_id of -1 to be ‘all reviews’ of the companies products
      v-bind:bgColor="'white'" // customizable background color of the plugin
      v-bind:messageBgColor="'red'" // customizable background color of the ‘message’ (e.g. 50+ people have posted…)
      v-bind:messageBgColorHover="'red'"  // customizable hover color of the message
      v-bind:chatWindowMessageColor="'gray'" // customizable background color of user message containers
/>
```

## Design Decisions 
Chose to include being able to upload simple messages (no content validation/monitoring) as a user to a server just to show that I have the ability to (since it will be important for the role), and to demonstrate some capabilities of custom styling since every business will want their plugin to be in accordance with their existing branding guidelines. Otherwise the implementation is pretty similar to what was in the case study docs, with the following features:
- Clicking the message launches an animation and displays the chatbot plugin
- Chatbot plugin shows messages
- Clicking outside of the message (on the rest of the page) removes the chatbot plugin

View the functionality at the home page, or with a Depop 'background' at /image_storefront

## Integrating with Shopify

To integrate the interface with Shopify as a plugin, the workflow would look something like:
1. Setting up custom theme app extension 
2. Port code over -- quick 2 minute solution would be to just load this component in the Shopify extension
3. Caveat is it would take longer to integrate specific products (you’d have to write some code that connects between your Shopify CDN/Database where your orders, product IDs are stored and this case studies’ solution) but as a business you’d have to connect your product IDs with the Banter database anyways 





## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
