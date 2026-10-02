import { prisma } from "../../../prisma/";

const getAll = (req: any, res: any) => {
    try {
        prisma.findMany().then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(500).json({ message: "Internal server error" });
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const homeController = {
    // getAll
}
