
import React from 'react';
import { Bell, Lock, Globe, Save } from 'lucide-react';

const SystemSettings: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl">
      <div className="space-y-6">
        
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-500" />
                General Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
                    <input type="text" defaultValue="UniRide Admin" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-uni-primary outline-none transition-shadow" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
                    <input type="email" defaultValue="support@uniride.edu.in" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-uni-primary outline-none transition-shadow" />
                </div>
            </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-gray-500" />
                Notification Preferences
            </h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-50">
                    <div>
                        <p className="text-sm font-medium text-gray-900">Email Alerts</p>
                        <p className="text-xs text-gray-500">Receive emails for high-severity safety reports</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-uni-primary"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">System Updates</p>
                        <p className="text-xs text-gray-500">Notify when system maintenance is scheduled</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-uni-primary"></div>
                    </label>
                </div>
            </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-gray-500" />
                Security
            </h2>
             <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Last password changed: 3 months ago</div>
                <div className="space-x-4">
                    <button className="text-uni-primary hover:text-blue-700 text-sm font-medium hover:underline">Change Password</button>
                    <button className="text-uni-primary hover:text-blue-700 text-sm font-medium hover:underline">Manage API Keys</button>
                </div>
            </div>
        </div>

        <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 bg-uni-primary text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors shadow-sm">
                <Save className="w-4 h-4" />
                Save Changes
            </button>
        </div>

      </div>
    </div>
  );
};

export default SystemSettings;
