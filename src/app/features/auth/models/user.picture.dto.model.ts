export interface UserPictureDtoModel {
  id: number;
  username: string;
  email: string;
  picture: string | null;
}

export interface User{
  id: number;
  username: string;
  email: string;
  picture?: string;
}
