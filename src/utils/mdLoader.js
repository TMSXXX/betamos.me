
import {marked} from 'marked'
import fm from 'front-matter'

export function fetchPostContent(postId) {
  const posts = getMdFiles();
  const post = posts.find(p => p.id === parseInt(postId));
  if (!post) throw new Error(`Post with ID ${postId} not found`);
  return post.fullContent;
}

export function getMdFiles() {
  const context = import.meta.glob('../contents/posts/*.md', { 
    eager: true, 
    query: '?raw', 
    import: 'default' 
  });
  const files = [];
  let iden = 1;

  for (const path in context) {
    try {
      const fileName = path.split('/').pop().replace(/\.md$/, '');
      let rawContent = context[path];
      
      // 统一内容为字符串并清理可能的问题字符
      let contentString = typeof rawContent === 'string' 
        ? rawContent 
        : rawContent.default || '';
      
      // 移除可能的BOM字符
      if (contentString.charCodeAt(0) === 0xFEFF) {
        contentString = contentString.slice(1);
      }
      
      // 标准化换行符
      contentString = contentString.replace(/\r\n/g, '\n');
      
      // 解析 Markdown
      const { attributes, body } = fm(contentString);
      
      // 获取标题
      const title = attributes?.title || 
                   (body.split('\n').find(line => line.startsWith('# ')) || '')
                     .replace(/^#\s+/, '').trim() || 
                   fileName;
      
      // 获取内容预览
      const contentLines = body.split('\n')
        .filter(line => !line.startsWith('#') && line.trim() !== '');
      
      const contentPreview = contentLines
        .slice(0, 3)
        .join(' ')
        .replace(/\*\*/g, '')
        .substring(0, 100);
      const html = marked.parse(contentPreview);
      files.push({
        fileName, 
        id: iden++, 
        title, 
        date: attributes.date, 
        content: html ? `${html}...` : '...', 
        fullContent: contentString
      });
    } catch (err) {
      console.error(`Failed to parse ${path}:`, err);
    }
  }
  
  // 按日期排序（从新到旧）
  const sortedFiles = files.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 重新分配ID（确保ID与排序后的顺序一致）
  return sortedFiles.map((file, index, arr) => ({
    ...file,
    id: arr.length - index,
  }));
}
