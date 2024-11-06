import { defineCustomElementSFC } from 'vue-web-component-wrapper';
import App from './App.vue';

export default function register() {
  const element = defineCustomElementSFC(App, { shadowRoot: false });

  if (!customElements.get('vue-app')) {
    customElements.define('vue-app', element);
  }
}
