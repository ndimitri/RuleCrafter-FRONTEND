export interface UserTokenDtoModel {
  accessToken: string;
  user: User
}

export interface User{
  id: number;
  token: string;
  username: string;
  email?: string;
}
