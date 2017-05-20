import Vue from 'vue';
import Snippet from './main.js';
console.log(Snippet);
Vue.component('snippet', Snippet);
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
   `
  }
});