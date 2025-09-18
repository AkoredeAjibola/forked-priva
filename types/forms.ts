export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PaymentFormActivationData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  condition: string;
  lastVisit: string;
  status: "Active" | "Inactive";
}
