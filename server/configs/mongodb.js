import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MONGODB Connected successfully')
    } catch (error) {
        console.log('MongoDB not connected')
    }
}

export default connectDB