
import React from 'react';
import { LayoutDashboard, Users, Car, ShieldAlert, Settings, LogOut } from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'rides', label: 'Ride & Booking', icon: Car },
    { id: 'safety', label: 'Safety & Trust', icon: ShieldAlert },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
        <div className="w-8 h-8 bg-uni-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
          U
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">UniRide</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = item.id === currentView;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id as ViewState)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-uni-primary font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-uni-primary' : 'text-gray-500'}`} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={onLogout}
          className="flex items-center space-x-3 text-red-600 hover:bg-red-50 w-full px-3 py-3 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
