import { defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';

export default function register() {
  const element = defineCustomElement(App);

  if (!customElements.get('vue-app')) {
    customElements.define('vue-app', element);
  }
}
