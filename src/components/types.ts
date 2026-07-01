import {
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
}

export interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}
export interface AppLoaderProps {
  visible: boolean;
  size?: 'small' | 'large';
  color?: string;
}

export interface AppTextProps extends TextProps {
  title: string;
  style?: StyleProp<TextStyle>;
  color?: string;
  size?: number;
  weight?: '400' | '500' | '600' | '700' | '800' | 'bold' | 'normal';
}
export interface EmptyStateProps {
  title?: string;
  description?: string;
  buttonTitle?: string;
  onPress?: () => void;
}

export interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface PriceSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface PaymentMethodCardProps {
  selectedMethod: 'cod' | 'razorpay';
  onChange: (method: 'cod' | 'razorpay') => void;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  rating?: number;
}

export interface ProductCardProps {
  item: Product;
  onPress: () => void;
  onAddToCart?: () => void;
  onWishlist?: () => void;
}
export interface CartHeaderProps {
  title?: string;
}
