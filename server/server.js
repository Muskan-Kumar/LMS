import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDB} from './configs/mongodb.js';
import { clerkWebhook } from './controllers/webhooks.js';

// Port
const PORT = process.env.PORT || 5000;

// initialize express
const app = express();

// middleware
app.use(cors());
dotenv.config()

//connect to database
await connectDB();

// Route
app.get('/',(req,res)=>{
    return res.send("API Working")
})
app.post('/clerk',express.json(),clerkWebhook)

app.listen(PORT,()=>console.log(`Server start at PORT ${PORT}`))
