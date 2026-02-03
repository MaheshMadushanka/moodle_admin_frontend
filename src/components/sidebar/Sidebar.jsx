import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings,
  Moon,
  Sun,
  LogOut
} from 'lucide-react';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Students', icon: GraduationCap },
    { name: 'Lecturers', icon: Users },
    { name: 'Courses', icon: BookOpen },
    { name: 'Reports & Analytics', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className={`flex flex-col h-screen w-64 ${
      isDarkMode 
        ? 'bg-slate-900 text-slate-300' 
        : 'bg-white text-slate-700'
    } transition-colors duration-300`}>
      {/* Logo Section */}
      <div className={`flex items-center justify-center h-16 ${
        isDarkMode ? 'border-slate-800' : 'border-slate-200'
      } border-b`}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
        }`}>
          <svg className={`w-5 h-5 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-700'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;
          
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? isDarkMode
                    ? 'bg-slate-800 text-white'
                    : 'bg-blue-50 text-blue-600'
                  : isDarkMode
                    ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className={`p-3 space-y-2 ${
        isDarkMode ? 'border-slate-800' : 'border-slate-200'
      } border-t`}>
        {/* Light/Dark Mode Toggle */}
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg ${
          isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100'
        }`}>
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Moon size={20} className="text-slate-300" />
            ) : (
              <Sun size={20} className="text-amber-500" />
            )}
            <span className="text-sm font-medium">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-blue-600' : 'bg-amber-400'
            }`}
            aria-label="Toggle theme"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 flex items-center justify-center ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            >
              {isDarkMode ? (
                <Moon size={12} className="text-blue-600" />
              ) : (
                <Sun size={12} className="text-amber-400" />
              )}
            </span>
          </button>
        </div>

        {/* Logout Button */}
        <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isDarkMode 
            ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}>
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;