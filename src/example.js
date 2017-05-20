import Vue from 'vue';
import Snippet from './main';

Vue.component('snippet', Snippet);
/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  data: {
    code: `
// Class
.center-block {
display: block;
margin-left: auto;
margin-right: auto;
}

// Usage as a mixin
.element {
.center-block();
}
 `,
  },
});
