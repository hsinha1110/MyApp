export interface Profile {
  firstName: string;
  lastName: string;
}

export interface Address {
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

export interface User {
  _id: string;
  email: string;
  phone: string;
  role: string;
  profile: Profile;
  addresses: Address[];
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

export interface CartState {
  cart: any;
  loading: boolean;
  error: string | null;
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
    case 'pending_payment':
      return '#F59E0B';

    case 'confirmed':
      return '#2563EB';

    case 'processing':
      return '#8B5CF6';

    case 'shipped':
      return '#0EA5E9';

    case 'delivered':
      return '#16A34A';

    case 'cancelled':
      return '#DC2626';

    default:
      return '#6B7280';
  }
};
