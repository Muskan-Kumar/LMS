import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDB} from './configs/mongodb.js';
import { clerkWebhook } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js'


// Port
const PORT = process.env.PORT || 5000;

// initialize express
const app = express();

// middleware
app.use(cors());
app.use(clerkMiddleware())
dotenv.config();


//connect to database
await connectDB();
await connectCloudinary();

// Route
app.get('/',(req,res)=>{
    return res.send("API Working")
})
app.post('/clerk',express.json(),clerkWebhook)
app.use('/api/educator', express.json(), educatorRouter)



app.listen(PORT,()=>console.log(`Server start at PORT ${PORT}`))
