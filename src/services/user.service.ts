import {getConnection} from "typeorm";
import User from "../entities/User";

export const getUser: (email: string) => Promise<User | undefined> = async (email) => {
    const manager = getConnection().manager;
    return await manager.findOne(User, {where: {email}})
}
