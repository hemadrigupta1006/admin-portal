
import React from 'react';
import { Car, MapPin, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const RideBooking: React.FC = () => {
  const rides = [
    { id: 1, driver: 'Aarav Patel', passenger: 'Sneha Singh', route: 'Main Campus -> City Center', date: '2023-10-25', status: 'Completed', amount: '₹45' },
    { id: 2, driver: 'Vikram Malhotra', passenger: 'Rahul Khanna', route: 'Hostel Block A -> Library', date: '2023-10-25', status: 'In Progress', amount: '₹15' },
    { id: 3, driver: 'Simran Kaur', passenger: 'Priya Verma', route: 'North Gate -> Tech Park', date: '2023-10-26', status: 'Scheduled', amount: '₹30' },
    { id: 4, driver: 'Rohan Gupta', passenger: 'Ananya Das', route: 'Main Campus -> Railway Stn', date: '2023-10-24', status: 'Cancelled', amount: '₹60' },
    { id: 5, driver: 'Karan Mehra', passenger: 'Ishita Sharma', route: 'Hostel Block B -> Gym', date: '2023-10-23', status: 'Completed', amount: '₹20' },
  ];

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
            <h2 className="text-lg font-semibold text-gray-800">Recent Ride Requests</h2>
             <div className="flex space-x-2">
                <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">Export CSV</button>
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase">
              <tr>
                <th className="p-4">Driver</th>
                <th className="p-4">Passenger</th>
                <th className="p-4">Route</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Fare</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rides.map((ride) => (
                <tr key={ride.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 font-bold">{ride.driver.charAt(0)}</div>
                         {ride.driver}
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{ride.passenger}</td>
                  <td className="p-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-sm">{ride.route}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-gray-400" />
                        <span className="text-sm">{ride.date}</span>
                    </div>
                  </td>
                  <td className="p-4">
                     <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        ride.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        ride.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        ride.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                     }`}>
                        {ride.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                        {ride.status === 'In Progress' && <Car className="w-3 h-3" />}
                        {ride.status === 'Scheduled' && <Clock className="w-3 h-3" />}
                        {ride.status === 'Cancelled' && <XCircle className="w-3 h-3" />}
                        {ride.status}
                     </span>
                  </td>
                  <td className="p-4 text-right font-medium text-gray-800">{ride.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RideBooking;
