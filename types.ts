
export type UserRole = 'Driver' | 'Passenger';
export type UserStatus = 'Active' | 'Blocked';
export type ViewState = 'dashboard' | 'users' | 'rides' | 'safety' | 'settings';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  rating: number;
  status: UserStatus;
  joinedDate: string;
}

export interface KPIData {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  type: 'neutral' | 'success' | 'warning' | 'info';
}

export interface RideData {
  name: string;
  registrations: number;
  rides: number;
}

export interface RouteData {
  route: string;
  requests: number;
}
