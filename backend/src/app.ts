
import "dotenv/config";
import {toNodeHandler} from "better-auth/node";
import express from 'express';
import {auth} from "./lib/auth.js";

import helmet from 'helmet';
import cookieParser from "cookie-parser"
import cors from "cors";
import {CORS_OPTIONS} from "./security/cors.js";
import homeRouter from "./routes/Home/Home.js";

const app = express();
const router = express.Router();
const port: number = parseInt(process.env.PORT as string);



app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());


app.use("/api/auth", toNodeHandler(auth));
app.use('/', router);
app.use('/api/home/', homeRouter);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`[serveur]: Connecté avec succès sur http://127.0.0.1:${port}`);
});