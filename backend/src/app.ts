
import {env} from "prisma/config";
import express from 'express';
import helmet from 'helmet';
import cookieParser from "cookie-parser"
import cors from "cors";
import {CORS_OPTIONS} from "./security/cors.js";
import homeRouter from "./routes/Home/Home.js";

const app = express();
const router = express.Router();
const port: number = parseInt(env("PORT"));

app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use('/', router);
app.use('/api/home/', homeRouter);

