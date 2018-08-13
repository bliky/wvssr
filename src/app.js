// app.js
import Vue from 'vue'
import { createRouter } from './router'

export function createApp () {
  // create router instance
  const router = createRouter()

  const app = new Vue({
    // inject router into root Vue instance
    router
  })

  // return both the app and the router
  return { app, router }
}
