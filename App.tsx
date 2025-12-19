
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import RideBooking from './components/RideBooking';
import SafetyTrust from './components/SafetyTrust';
import SystemSettings from './components/SystemSettings';
import Login from './components/Login';
import { ViewState } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const getHeaderTitle = (view: ViewState) => {
    switch (view) {
      case 'dashboard': return 'Admin Dashboard';
      case 'users': return 'User Management';
      case 'rides': return 'Ride & Booking Management';
      case 'safety': return 'Safety & Trust Center';
      case 'settings': return 'System Settings';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <UserManagement />;
      case 'rides': return <RideBooking />;
      case 'safety': return <SafetyTrust />;
      case 'settings': return <SystemSettings />;
      default: return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-uni-bg font-sans text-gray-900">
      
      {/* Fixed Sidebar */}
      <Sidebar 
        currentView={currentView} 
        onNavigate={(view) => setCurrentView(view)} 
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Sticky Header */}
        <Header title={getHeaderTitle(currentView)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            {renderContent()}
          </div>
        </main>

      </div>
      
      {/* Mobile Overlay (Simplification for responsiveness) */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 flex justify-around z-50">
         <span className="text-xs text-gray-500 text-center">Mobile view is limited.<br/>Please view on desktop.</span>
      </div>
    </div>
  );
};

export default App;
