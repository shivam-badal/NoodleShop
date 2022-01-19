import express from "express";
import { connectDB } from "./utils/database";
import cookieParser from "cookie-parser";
import routes from "./api/routes";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const PORT = 3000;

const startServer = async () => {

    const allowedOrigins = ['http://localhost:4200']
    const options: cors.CorsOptions = {
        origin: allowedOrigins,
        credentials: true,
    }
    app.use(cors(options))

    app.listen(PORT, () => {
        console.log(`Server started up on port: ${PORT}`);
    });
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/api", routes);
};

const runner = async () => {
    await connectDB();
    await startServer();
};

runner();
