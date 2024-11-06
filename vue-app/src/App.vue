<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'


const styleObject = ({
  height:"6em",
  padding:"1.5em",
  willChange:"filter",
  transition: "filter 300ms",
})


</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo"  alt="Vite logo" :style="styleObject"  />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue"  :style="styleObject" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>




<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
