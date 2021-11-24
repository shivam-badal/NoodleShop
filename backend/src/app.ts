import express from "express";
import { connectDB } from "./utils/database";

const app = express();
const PORT = 3000;

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server started up on port: ${PORT}`);
    });
};

const runner = async () => {
    await connectDB();
    await startServer();
};

runner();
