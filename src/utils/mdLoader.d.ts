interface Post {
  fileName: string;
  id: number;
  title: string;
  date?: string;
  content: string;
  fullContent: string;
}

export function fetchPostContent(postId: string | number): string;
export function getMdFiles(): Post[];

