import express from 'express';
import cors from 'cors';
import { courses, tags, users} from './data';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'], // Allow requests from this origin
  })
);



app.get('/api/courses/search/:searchTerm', (req, res) => {

    const { searchTerm } = req.params;
    const crs=courses.filter(course=>course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(crs);})


app.get('/api/courses/tags', (req, res) => {
    res.send(tags);
  });

  app.get('/api/courses/tag/:tagName', (req, res) => {
    const tagName = req.params.tagName;
    const crs=courses.filter(course=>course.tags.includes(tagName));
    res.send(crs);
    });


    app.get('/api/courses/:course_id', (req, res) => {
        const course_id = req.params.course_id;
        const crs=courses.find(course=>course.id==course_id);
        res.send(crs);
        });

app.post('/api/users/login', (req, res) => {
  const {email, password} = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if(user){
   res.send(generateTokenResponse(user));
  }
  else{
    res.status(401).send({message: 'Invalid email or password'});}
});

const generateTokenResponse=(user:any)=>{
  const token = jwt.sign({
    
    email: user.email,
     isAdmin: user.isAdmin
},"Some Secret",{
  expiresIn: '30d'});

user.token=token;
return user;

};




// Example API endpoint
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});