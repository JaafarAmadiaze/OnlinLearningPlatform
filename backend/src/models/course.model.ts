import { model, Schema } from "mongoose";

export interface Course{
     id : number;
  title : string;
  description: string;
  ImageUrl : string;
  created_at?: Date;
  duration: number;
  course_id: number;
  tags: string[]; 
  price: number;
}


export const Course = new Schema<Course>({

  title: { type: String, required: true },
  description: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  duration: { type: Number, required: true },
  course_id: { type: Number, required: true },
  tags: { type: [String], required: true },
  price: { type: Number, required: true },


},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps: true
}
);



export const CourseModel = model<Course>("Course", Course);