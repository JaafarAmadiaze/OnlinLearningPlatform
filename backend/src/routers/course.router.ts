import e, { Router } from 'express';
import { sample_courses, sample_tags } from '../data';
import expressAsyncHandler from 'express-async-handler';
import { CourseModel } from '../models/course.model';


const router=Router();


router.get('/seed', expressAsyncHandler(async (req, res) => {

  const coursesCount = await CourseModel.countDocuments();
  if (coursesCount > 0) {
    res.send("Seed is already done !");
    return;
  } 
  await CourseModel.create(sample_courses);
  res.send("Seeded successfully");  
}));


router.get('/', expressAsyncHandler(async (req, res) => {
  const courses = await CourseModel.find({});
  res.send(courses);
}));

  router.get('/search/:searchTerm', expressAsyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const courses= await CourseModel.find({ title: {$regex:searchRegex} });

    res.send(courses);
  }))


router.get("/tags", expressAsyncHandler(
  async (req, res) => {
    const tags = await CourseModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'All',
      count: await CourseModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
))

    router.get("/tag/:tagName",expressAsyncHandler(
  async (req, res) => {
    const courses = await CourseModel.find({tags: req.params.tagName})
    res.send(courses);
  }
))


     router.get('/:course_id', expressAsyncHandler(
  async (req, res) => {

    const course = await CourseModel.findById(req.params.course_id);
    res.send(course);
  }
));

        export default router;