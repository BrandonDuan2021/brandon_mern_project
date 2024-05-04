import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import path from 'path'

dotenv.config()


dotenv.config()

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Connected to MongoDB......')
    }
).catch((e)=>{
    console.log(e)
})

const __dirname = path.resolve()


const app = express();
app.use(express.json())

app.listen(3000, ()=>{
    console.log("Express listening on Port 3000......")
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


// Error handling middleware
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const msg = error.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        msg
    })
})