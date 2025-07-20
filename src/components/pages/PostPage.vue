<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown } from '@/utils/markdown'
import { fetchPostContent } from '@/utils/mdLoader'

const route = useRoute()
const postId = route.params.postId
const rawMd = ref('')
const meta = ref({})
const content = ref('')

onMounted(async () => {
  const postContent = await fetchPostContent(postId)
  const parsed = parseMarkdown(postContent)
  meta.value = parsed.meta
  content.value = parsed.content
})
</script>

<template>
  <div class="contents">
    <section class="article">
      <h1>{{ meta.title }}</h1>
      <div class="post-meta" v-if="meta.date">
        <span class="post-date"
          >发布日期：{{ new Date(meta.date).toISOString().split('T')[0] }}
        </span>
        <span class="post-date"> 作者：{{ meta.author }}</span>
      </div>
      <div v-html="content"></div>
    </section>
  </div>
</template>

<style scoped>
.post-meta {
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 1rem;
}

/* Target the rendered markdown content */
.article:deep(h1) {
  color: #7fbbb3;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.article:deep(img) {
  max-width: 80%;
  height: auto;
  box-shadow: 0 4px 8px 4px rgba(127, 187, 179, 0.2);
}

.article:deep(p) {
  margin-top: 0.75rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
}

.article:deep(a) {
  color: #7fbbb3;
  text-decoration: underline;
}

.article:deep(code) {
  background: none;
  font-family: 'JetBrains Mono';
  font-size: 0.75rem;
  word-wrap: break-word;
  color: #7fbbb3;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

.article:deep(pre) {
  background: rgba(127, 187, 179, 0.2);
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}

.article:deep(blockquote) {
  border-left: 4px solid #7fbbb3;
  margin: 1rem 1rem 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(127, 187, 179, 0.2);
  font-style: italic;
}

.contents {
  margin: auto;
  width: 60%;
  justify-content: center;
}

@media (max-width: 900px) {
  .contents {
    width: 90%;
  }
}

.article {
  display: inherit;
  justify-content: center;
  font-family: Microsoft Yahei;
  margin: 20px 0;
  padding: 30px;
  border: 1px solid #7fbbb3;
  border-radius: 5px;
  line-height: auto;
}
</style>
