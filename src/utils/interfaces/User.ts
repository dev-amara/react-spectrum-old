export interface User {
  id?: string;
  password: string;
  email: string;
  accountName?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  role?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isEnabled?: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface VerifyOtp {
  token: string;
  code: number;
}
