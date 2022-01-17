import { User } from "../entities/user.entity";
import jsonwebtoken, {SignOptions} from "jsonwebtoken";

export const signToken = async (payload: Payload, secretKey: string, expiresIn: string) => {
    return new Promise((resolve, reject) => {
        const options: SignOptions = {
            expiresIn: 60 * 60
        }

        const token = jsonwebtoken.sign(payload, secretKey, { expiresIn: 60 * 60})
        console.log(token)
        if (!token) {
            reject({message: "dog"})
        }
        else {
            resolve(token)
        }
    })
}

export interface Payload {
    user: User;
}
