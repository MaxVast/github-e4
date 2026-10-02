
import "dotenv/config";
import express from 'express';
import helmet from 'helmet';
import cookieParser from "cookie-parser"
import cors from "cors";
import {CORS_OPTIONS} from "./security/cors.js";
import homeRouter from "./routes/Home/Home.js";
import taskRouter from "./routes/Task/Task.js";

const app = express();
const router = express.Router();
const port: number = parseInt(process.env.PORT as string);

app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use('/', router);
app.use('/api/task/', taskRouter);
app.use('/api/home/', homeRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`[serveur]: Connecté avec succès sur http://127.0.0.1:${port}`);
});