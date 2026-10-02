import "dotenv/config";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";
import {PrismaClient} from "../generated/prisma/client.js";
import {env} from "prisma/config";

console.log(env("BDD_HOST"), env("BDD_USER"))
const adapter = new PrismaMariaDb({
    host: env("BDD_HOST"),
    port: parseInt(env("BDD_PORT")),
    user: env("BDD_USER"),
    password: env("BDD_PASSWORD"),
    database: env("BDD_DATABASE"),
    connectionLimit: 5,
    allowPublicKeyRetrieval: true,
});
const prisma = new PrismaClient({adapter});

export {prisma};

