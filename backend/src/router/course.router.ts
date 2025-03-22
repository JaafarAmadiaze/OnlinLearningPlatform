import { Router } from 'express';
import { courses, tags } from '../data';
const router=Router();


router.get('/api/courses', (req, res) => {
  res.send(courses);
});

  router.get('/api/courses/search/:searchTerm', (req, res) => {
    const { searchTerm } = req.params;
    const crs=courses.filter(course=>course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(crs);})


    router.get('/api/courses/tags', (req, res) => {
    res.send(tags);
  });

    router.get('/api/courses/tag/:tagName', (req, res) => {
    const tagName = req.params.tagName;
    const crs=courses.filter(course=>course.tags.includes(tagName));
    res.send(crs);
    });


     router.get('/api/courses/:course_id', (req, res) => {
        const course_id = req.params.course_id;
        const crs=courses.find(course=>course.id==course_id);
        res.send(crs);
        });