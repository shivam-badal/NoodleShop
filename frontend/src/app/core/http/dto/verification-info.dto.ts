import {User} from "../../../modules/authentication/models/user.model";

export interface VerificationInfoDTO {
  loggedIn: boolean,
  user: User;
}
