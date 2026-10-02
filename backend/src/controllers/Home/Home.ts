

import {prisma} from "../../lib/prisma.js";

const health = async (req: any, res: any) => {


    try {
        res.status(200).json({ message: "API is healthy" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const homeController = {
    // getAl*
    health
}
