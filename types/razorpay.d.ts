export {};

interface RazorpayPrefillOptions {
  name?: string;
  email?: string;
  contact?: string;
}

interface RazorpayThemeOptions {
  color?: string;
}

interface RazorpayModalOptions {
  ondismiss?: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: RazorpayPrefillOptions;
  notes?: Record<string, string>;
  theme?: RazorpayThemeOptions;
  modal?: RazorpayModalOptions;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: (response: unknown) => void) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}
