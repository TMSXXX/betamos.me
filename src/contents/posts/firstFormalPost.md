---
title: "AI含量99%的Vue3静态博客制作记录"
date: 2025-06-29
---

> 我好想吃荔枝

## 神秘碎碎念
期末考前一周，因为是618，故组了一台itx，
主要是想完成我初中时候的梦想，再试试英特尔的**B580**，结果因为突然想折腾就装了个ArchLinux。
然后呢，想着装都装了我得搞点什么显得自己很酷的东西，于是就顺便想把这个博客搞了，
  可是vue3现在还学的半桶水，所以先在Neovim里配了个Avante再让它当黑奴帮我写代码。

## 大致样式的实现
  当时我在物色neovim的主题配色，看来看去发现我去这个everforest很好看啊，然后就想着把博客配色也这么弄了。
大致抄了色板就开始写，先让Avante帮我弄了个大概的样式，
> help me make a blog home page in the style of CLI and with the palatte of everforest

  一开始它的 Recent Posts 是长这样的

![](src/assets/images/图片2.png)

其实还要丑一点，但是我已经忘了当时实际长什么样了。总之我想要弄个酷炫的双栏,
于是我发动惊世智慧在框里面分了两栏，然后改成横向排列，
这样就可以***很酷***。

## Markdown 文件的支持和排序
### front-matter 使用
Markdown文件的实现用的是 front-matter，也是 Avante 推荐的，
不过我都还没去了解它的实际用法，感觉一个函数进去就把attribute和body分出来再作处理就好了。
途中也学习了很多 Markdown 写作的规范。

### 排序
另一个大问题是我需要把我的推文用日期排序，首先就是用 front-matter 获取 attributes 里的 date 再根据 date 重新分配 id 就好了。
再一个就是我要怎么让双栏正确显示顺序，这里学的是 v-for:

```
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

```

总之最后就这样弄出来了。

## 路由
昨天考完期末，熬夜看了看路由怎么用，然后自己大概写了一下样式和跳转，
再让 Avante 教我怎么把 id 传到 router 里面搞对应的页面，然后就搞着搞着搞到现在

```
// PostPage.vue
onMounted(async () => {
  const postContent = await fetchPostContent(postId)
  const parsed = parseMarkdown(postContent)
  meta.value = parsed.meta
  content.value = parsed.content
})

// mdLoader.js
export function fetchPostContent(postId) {
  const posts = getMdFiles();
  const post = posts.find(p => p.id === parseInt(postId));
  if (!post) throw new Error(`Post with ID ${postId} not found`);
  return post.fullContent;
}

// 
```

我蠢，用了两个 .js 文件来搞 .md 的转换，所以你会看到有两个不同的函数，后续估计会合并一下

## 最后的最后
> 陨-石-它-正-在-向-这-边-飞-来-来-来-

已经 12:04 了，我要去吃饭了。
总之搞这个我感觉对 vue 的理解还是有增强的，虽然其实还是面向 AI 编程。

fin.
