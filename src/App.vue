<script setup lang="ts">
import { ref } from 'vue'
import Home from './components/pages/Home.vue'
import Post from './components/pages/PostPage.vue'
</script>

<template>
  <head>
    <title>Downpour</title>
  </head>
  <div class="blog-container">
    <header class="blog-header">
      <router-link to="/">
        <h1 class="title">-- Downpour --</h1>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  background-color: #2d353b;
}

.block-line {
  width: 50%;
}

a {
  text-decoration: none;
}

.title {
  font-family: 'Jetbrains Mono';
  font-size: 26px;
  margin-bottom: 200px;
}

.blog-header h1 {
  font-size: 22;
  margin-top: 20px;
  /* padding-bottom: 100px; */
  margin-bottom: 20px;
  text-align: center;
  color: #7fbbb3;
  border-bottom: 2px solid #7fbbb3;
  padding-bottom: 10px;
}

.blog-container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  /* 确保容器本身也没有外边距 */
  font-family: monospace;
  color: #d3c6aa;
  background-color: #2d353b;
}
</style>
