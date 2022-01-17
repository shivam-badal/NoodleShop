import express from "express";
import { connectDB } from "./utils/database";
import cookieParser from "cookie-parser";
import routes from "./api/routes";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

const startServer = async () => {
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
