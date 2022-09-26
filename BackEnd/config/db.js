import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb is connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;