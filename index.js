import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));