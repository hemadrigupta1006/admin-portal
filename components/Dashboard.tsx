import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend 
} from 'recharts';
import { Users, Car, AlertTriangle, Leaf, ChevronUp, ShieldBan, FileText } from 'lucide-react';
import { REGISTRATIONS_VS_RIDES, TOP_ROUTES } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Total Students */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Registered Students</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">2,453</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="w-5 h-5 text-uni-primary" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-green-600 text-sm font-medium">
            <ChevronUp className="w-4 h-4 mr-1" />
            <span>12% from last month</span>
          </div>
        </div>

        {/* Card 2: Active Rides */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Rides Today</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">142</h3>
            </div>
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Car className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Card 3: Unresolved Safety Reports */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Unresolved Safety Reports</p>
              <h3 className="text-2xl font-bold text-uni-warning mt-1">3</h3>
            </div>
            <div className="p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-uni-warning" />
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">Requires immediate attention</p>
        </div>

        {/* Card 4: CO2 Saved */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Est. CO<sub>2</sub> Saved</p>
              <h3 className="text-2xl font-bold text-uni-success mt-1">850 kg</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <Leaf className="w-5 h-5 text-uni-success" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-green-600 text-sm font-medium">
            <ChevronUp className="w-4 h-4 mr-1" />
            <span>5% more than avg</span>
          </div>
        </div>
      </div>

      {/* Main Content Area - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">New Registrations vs. Rides Posted</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={REGISTRATIONS_VS_RIDES} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" tick={{fontSize: 12}} />
                <YAxis stroke="#9ca3af" tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="registrations" stroke="#1e3a8a" strokeWidth={3} name="Registrations" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="rides" stroke="#3b82f6" strokeWidth={3} name="Rides Posted" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar Column within Grid */}
        <div className="space-y-6">
          
          {/* Bar Chart - Top Routes */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Top 5 Requested Routes</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={TOP_ROUTES} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="route" type="category" width={100} tick={{fontSize: 10}} interval={0} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="requests" fill="#1e3a8a" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group">
                <ShieldBan className="w-6 h-6 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-red-700">Block User</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-blue-100 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <FileText className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-blue-700">View Reports</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
