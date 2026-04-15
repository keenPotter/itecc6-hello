<script setup>
import HelloWorld from './components/HelloWorld.vue'
import image1 from './assets/image1.jpg'
</script>

<template>
  <img :src="image1" alt="Image 1" style="height: 300px; width: 300px;border-radius: 50%;margin: 25% auto 10px auto;display: block;border: 3px solid skyblue;padding: 2px;">
  <h1>Hi! My name is <span style="color: skyblue;text-decoration: underline;font-style: italic;">Keen Potter Ngamoy</span></h1>
</template>
