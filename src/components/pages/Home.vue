<script setup lang="ts">
import { ref } from 'vue'
import PostCard from '../blog/PostCard.vue'
import { getMdFiles } from '../../utils/mdLoader.js'


const posts = ref(
  getMdFiles()
/*[
  { id: 1, title: '组件测试1', content: '111' },
  { id: 2, title: '组件测试2', content: '111' },
  { id: 3, title: '组件测试3', content: '111' },
  { id: 4, title: '叮咚及 大狗叫', content: '楼下的下来到核算，一段一段带一段哈基米哈基米哈基米大狗大狗皎皎较' },
  { id: 5, title: '最后一个组件测试', content: '—一段一段带一段哈基米哈基米哈基米大狗大狗皎皎较大狗皎较—一段一段带一段哈基米哈基米哈基米大狗大狗皎皎较大狗皎较————dwa' }
  
]*/)
console.log(posts.value);
console.log(JSON.parse(JSON.stringify(posts.value)));
</script>
<template>

  <div class="contents">
    <section class="introduction">
      <h2>我是谁</h2>
      <p>TMSSTR, Betamos, 本曾, 姜兔 ...... 或者其他？</p>
      <p>这是我的博客</p>
    </section>

    <section class="recent-articles">
      <h2>Recent Posts</h2>
      <div class="articles">
        <div class="block-line">
          <ul>
            <PostCard v-for="(post, index) in [...posts].sort((a, b) => b.id - a.id).filter((_, i) => i % 2 === 0)"
              :key="post.id" :title="post.title" :content="post.content" :postId="post.id" />
          </ul>
        </div>
        <div class="block-line">
          <ul>
            <PostCard v-for="(post, index) in [...posts].sort((a, b) => b.id - a.id).filter((_, i) => i % 2 !== 0)"
              :key="post.id" :title="post.title" :content="post.content" :postId="post.id" />
          </ul>
        </div>
      </div>
    </section>

    <section class="links">
      <h2>Links</h2>
    </section>
  </div>

</template>

<style scoped>
a {
  text-decoration: none;
}

.recent-articles,
.links {
  font-family: Microsoft Yahei;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #7fbbb3;
  border-radius: 5px;
}

.articles {
  display: flex;
  justify-content: center;
}

.introduction {
  display: inherit;
  justify-content: center;
  font-family: Microsoft Yahei;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #7fbbb3;
  border-radius: 5px;
}

h2 {
  color: #7fbbb3;
  margin-bottom: 10px;
  width: 100%;
}

.contents {
  margin: auto;
  width: 60%;
  justify-content: center;
}
</style>
