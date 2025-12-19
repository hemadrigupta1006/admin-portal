
import React from 'react';
import { AlertTriangle, Check, MoreVertical, Shield } from 'lucide-react';

const SafetyTrust: React.FC = () => {
  const reports = [
    { id: 1, user: 'Ishita Sharma', type: 'Harassment', severity: 'High', date: '2 hours ago', status: 'Unresolved', description: 'Driver was making inappropriate comments during the ride.' },
    { id: 2, user: 'Ananya Das', type: 'Reckless Driving', severity: 'Medium', date: '1 day ago', status: 'Under Review', description: 'Driver exceeded speed limits near the campus gate.' },
    { id: 3, user: 'Rahul Khanna', type: 'Late Arrival', severity: 'Low', date: '3 days ago', status: 'Resolved', description: 'Driver arrived 20 minutes late without notice.' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center justify-between">
            <div>
                <p className="text-red-600 text-sm font-medium">Critical Issues</p>
                <h3 className="text-2xl font-bold text-red-700">3</h3>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-300" />
        </div>
        <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-xl flex items-center justify-between">
            <div>
                <p className="text-yellow-600 text-sm font-medium">Pending Reviews</p>
                <h3 className="text-2xl font-bold text-yellow-700">12</h3>
            </div>
            <Shield className="w-8 h-8 text-yellow-300" />
        </div>
        <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex items-center justify-between">
            <div>
                <p className="text-green-600 text-sm font-medium">Resolved Today</p>
                <h3 className="text-2xl font-bold text-green-700">8</h3>
            </div>
            <Check className="w-8 h-8 text-green-300" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">Recent Safety Reports</h2>
        </div>
        <div className="divide-y divide-gray-100">
            {reports.map((report) => (
                <div key={report.id} className="p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                                    report.severity === 'High' ? 'bg-red-100 text-red-700' :
                                    report.severity === 'Medium' ? 'bg-orange-100 text-orange-700' :
                                    'bg-blue-100 text-blue-700'
                                }`}>{report.severity}</span>
                                <h3 className="text-sm font-bold text-gray-900">{report.type}</h3>
                            </div>
                            <p className="text-sm text-gray-600">{report.description}</p>
                            <div className="flex items-center text-xs text-gray-500 gap-2 mt-2">
                                <span>Reported by <strong>{report.user}</strong></span>
                                <span>•</span>
                                <span>{report.date}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 self-end md:self-auto">
                             <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                                report.status === 'Unresolved' ? 'border-red-200 text-red-600 bg-red-50' :
                                report.status === 'Under Review' ? 'border-yellow-200 text-yellow-600 bg-yellow-50' :
                                'border-green-200 text-green-600 bg-green-50'
                             }`}>
                                {report.status}
                             </span>
                             <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200">
                                <MoreVertical className="w-5 h-5" />
                             </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyTrust;
