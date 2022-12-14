import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path'
import morgan from 'morgan'
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middlewire/errorMiddlewire.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000;


app.listen(5000, console.log(`Server is running in port ${process.env.PORT}`.red.underline.bold))