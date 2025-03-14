import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../database/datasource";
import { User } from "../models/User";
import argon2 from "argon2";

const userRepo = AppDataSource.getRepository(User);

const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const {email, username, password} = req.body;

        const foundUser = await userRepo.findOne({where: {email: email}});
        if (foundUser) return res.status(409).json({ message: "Email is already taken" });

        const secret = process.env.PASSWORD_HASH_SECRET;
        if(typeof secret !== 'string') return next(new Error("Invalid PASSWORD_HASH_SECRET"));
        const password_hash = await argon2.hash(password, { secret: Buffer.from(secret) });

        const user = userRepo.create({
            email: email,
            password: password_hash,
            username: username
        });

        await userRepo.save(user);
        
        return res.status(200).json({ message: "User created", data: user });
        
    } catch (error) {
        next(error);
    }
}

export { createUser }