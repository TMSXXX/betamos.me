<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
  content: String,
  postId: String,
});

</script>

<template>
  <router-link :to="`/post/${postId}`" class="link">
    <li class="post-card">
      <h2>{{ title }}</h2>
      <div v-html='content' />
    </li>
  </router-link>


</template>

<style scoped>
.post-card {
  list-style-type: none;
  margin: 10px 20px 10px 20px;
  padding: 20px 15px 25px 15px;
  border: 1px solid #7fbbb3;
  border-radius: 5px;
  font-size: 12px;
  background-color: #2d353b;
  color: #d3c6aa;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  /* 添加过渡动画 */
}

.link a,
.router-link,
.router-link-active,
.router-link-exact-active {
  text-decoration: none !important;
  color: inherit !important;
}

.post-card h3 {
  color: #7fbbb3;
  margin-bottom: 10px;
}

.post-card p {
  margin-bottom: 4px;
  font-size: 14px;
}

.post-card:hover {
  transform: scale(1.03);
  /* 悬停放大 */
  box-shadow: 0 4px 8px rgba(127, 187, 179, 0.2);
  /* 浅色阴影 */
}

.post-card:active {
  transform: scale(0.99);
  /* 点击时轻微收缩 */
}
</style>
