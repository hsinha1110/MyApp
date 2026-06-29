interface Profile {
  firstName: string;
  lastName: string;
}

interface Address {
  _id: string;
  label: string;
  fullName: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  isDefault: boolean;
}

interface User {
  _id: string;
  email: string;
  phone: string;
  role: string;
  profile: Profile;
  addresses: Address[];
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}
