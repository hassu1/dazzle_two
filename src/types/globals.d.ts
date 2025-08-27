// types/globals.d.ts
export {};

declare global {
  interface Window {
    $: typeof import('jquery');
    jQuery: typeof import('jquery');
  }

interface Car {
  id: number;
  car_brand_id: number;
  free_pickup_drop: boolean;
  bluetooth:boolean;
  parking_sensor:boolean;
  full_insurance:boolean;
  is_featured:boolean;
  logo?: string;
  payment_type:string;
  customer_service_24_7: boolean;
  cruise_control: boolean;
  automatic: boolean;
  navigation: boolean;
  security_type:boolean;
  free_cancellation: boolean;
  daily_mileage: boolean;
  name: string;
  model: string;
  year: string;
  deposit: string;
  engine: string;
  seats: number;
  doors: number;
  main_image: string;
  gallery: string[];
  description: string;
  car_types:string;
  daily_rate: string;
  image?: string;
  slug?: string;
  luggage: string;
  brand: {
    id: number;
    name: string;
    logo: string | null;
  };
}

  interface ApiResponse {
    success: boolean;
    message?: string;
    data?: Car[];
  }
}
