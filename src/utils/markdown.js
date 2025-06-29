// src/utils/markdown.js
import { marked } from 'marked'
import hljs from 'highlight.js'
import fm from 'front-matter'

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
})

export const parseMarkdown = (mdText) => {
  const { attributes, body } = fm(mdText)
  const html = marked.parse(body)
  return { meta: attributes, content: html }
}
