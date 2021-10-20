export interface IPostDTO {
  id?: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  user_id?: string;
  created_at?: Date;
}
