import { LogOut } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

function LandingPage({ onNavigate, onLogout }: LandingPageProps) {
  const navigationItems = [
    { name: 'About', color: 'bg-blue-600 hover:bg-blue-700' },
    { name: 'Contractor', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'Consultant', color: 'bg-orange-600 hover:bg-orange-700' },
    { name: 'Client & Public', color: 'bg-red-600 hover:bg-red-700' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Your Dashboard
          </h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Select a section to explore:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.name)}
              className={`${item.color} text-white text-xl font-semibold py-8 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105 hover:shadow-lg`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Quick Start Guide
          </h2>
          <p className="text-gray-600">
            This is a practice website for learning web development. Click on any of the buttons above to navigate to different sections. Each section demonstrates basic navigation and page structure concepts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
