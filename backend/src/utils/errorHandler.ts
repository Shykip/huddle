import { Request, Response, NextFunction } from "express";

export const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (!res.headersSent) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}