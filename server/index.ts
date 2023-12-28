import express, { Request, Response, NextFunction } from 'express';
import sequelize from './utils/database';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { cloudinaryConnect } from './utils/cloudinary';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config();

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        await sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
initializeDatabase();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp",
    })
);

//cloudinary connection
cloudinaryConnect();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
