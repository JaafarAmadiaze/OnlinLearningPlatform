
import dotenv from 'dotenv';
dotenv.config();



import express from 'express';
import cors from 'cors';
import courseRouter from './routers/course.router';
import userRouter from './routers/user.router';
import {connectDatabase} from './configs/database.config';
connectDatabase();

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'], // Allow requests from this origin
  })
);

app.use("/api/courses",courseRouter)

app.use("/api/users",userRouter)

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