import {User} from "../../../../entities/user.entity";

export interface DecryptedTokenDTO {
    user: User;
    iat: number;
    exp: number
}
