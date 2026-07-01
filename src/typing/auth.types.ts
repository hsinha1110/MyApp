// ================= REQUEST =================
export interface User {
  _id: string;
  email: string;
  phone: string;
  profile: {
    firstName: string;
    lastName: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginRequest extends LoginFormData {}

// ================= RESPONSE =================
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponseData {
  user: User;
  tokens: AuthTokens;
}

export interface LoginResponse {
  success: boolean;
  data: LoginResponseData;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  phone: string;
  profile: {
    firstName: string;
    lastName: string;
  };
}
export interface RegisterResponse {
  success: boolean;
  data: {
    user: User;
    tokens: AuthTokens;
  };
}
