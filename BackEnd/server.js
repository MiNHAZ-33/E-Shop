import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middlewire/errorMiddlewire.js';

dotenv.config()

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000;


app.listen(5000, console.log(`Server is running in port ${process.env.PORT}`.red.underline.bold))