
export class Courses{
  id! : number;
  title! : string;
  description!: string;
  ImageUrl !: string;
  created_at?: Date;
  duration!: number;
  course_id!: number;
  tags!: string[]; 
  price!: number;
}