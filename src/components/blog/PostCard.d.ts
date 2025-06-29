import { DefineComponent } from 'vue';

declare const PostCard: DefineComponent<{
  title: string;
  content: string;
  postId: string;
}>;

export default PostCard;

