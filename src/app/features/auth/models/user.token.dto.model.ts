export interface UserTokenDtoModel {
  accessToken: string;
  user: User
}

export interface User{
  token: string;
  username: string;
  email?: string;
}
