import {UserDtoModel} from './user.dto.model';

export interface UserTokenDtoModel {
  token: string;
  user: UserDtoModel
}
