export interface AddressFormData {
  label: 'home' | 'office' | 'other';
  fullName: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
