import { User, RideData, RouteData } from './types';

export const USERS_DATA: User[] = [
  { id: '1', name: 'Aarav Patel', email: 'aarav.p@jecrc.edu.in', role: 'Driver', rating: 4.8, status: 'Active', joinedDate: '2023-09-15' },
  { id: '2', name: 'Ishita Sharma', email: 'ishita.s@jecrc.edu.in', role: 'Passenger', rating: 4.9, status: 'Active', joinedDate: '2023-09-18' },
  { id: '3', name: 'Rohan Gupta', email: 'rohan.g@jecrc.edu.in', role: 'Driver', rating: 2.4, status: 'Blocked', joinedDate: '2023-10-02' },
  { id: '4', name: 'Sneha Singh', email: 'sneha.singh@jecrc.edu.in', role: 'Passenger', rating: 5.0, status: 'Active', joinedDate: '2023-10-05' },
  { id: '5', name: 'Vikram Malhotra', email: 'vikram.m@jecrc.edu.in', role: 'Driver', rating: 4.6, status: 'Active', joinedDate: '2023-10-12' },
  { id: '6', name: 'Ananya Das', email: 'ananya.d@jecrc.edu.in', role: 'Passenger', rating: 4.2, status: 'Active', joinedDate: '2023-10-20' },
  { id: '7', name: 'Karan Mehra', email: 'karan.m@jecrc.edu.in', role: 'Driver', rating: 3.8, status: 'Blocked', joinedDate: '2023-11-01' },
  { id: '8', name: 'Priya Verma', email: 'priya.v@jecrc.edu.in', role: 'Passenger', rating: 4.7, status: 'Active', joinedDate: '2023-11-15' },
  { id: '9', name: 'Rahul Khanna', email: 'rahul.k@jecrc.edu.in', role: 'Passenger', rating: 4.5, status: 'Active', joinedDate: '2023-11-20' },
  { id: '10', name: 'Simran Kaur', email: 'simran.k@jecrc.edu.in', role: 'Driver', rating: 4.9, status: 'Active', joinedDate: '2023-12-01' },
];

export const REGISTRATIONS_VS_RIDES: RideData[] = [
  { name: 'Day 1', registrations: 12, rides: 5 },
  { name: 'Day 5', registrations: 25, rides: 15 },
  { name: 'Day 10', registrations: 45, rides: 30 },
  { name: 'Day 15', registrations: 60, rides: 55 },
  { name: 'Day 20', registrations: 85, rides: 80 },
  { name: 'Day 25', registrations: 110, rides: 120 },
  { name: 'Day 30', registrations: 150, rides: 180 },
];

export const TOP_ROUTES: RouteData[] = [
  { route: 'Main Campus -> City Center', requests: 450 },
  { route: 'Hostel Block A -> Library', requests: 380 },
  { route: 'North Gate -> Tech Park', requests: 310 },
  { route: 'Main Campus -> Railway Stn', requests: 250 },
  { route: 'Hostel Block B -> Gym', requests: 190 },
];
