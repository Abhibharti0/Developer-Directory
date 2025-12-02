import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import developerRoutes from './routes/developer.routes.js';
import cors from 'cors';



dotenv.config();


const app = express();
app.use(express.json());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
 
}))
const PORT = process.env.PORT || 3000;

const mongoUrl = process.env.MONGODB_URL;

try {
  await mongoose.connect(mongoUrl);
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

app.use('/api/developer', developerRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});