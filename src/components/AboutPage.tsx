import { ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-200"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">About</h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              This is the About page. Welcome to this section!
            </p>

            <p>
              This page demonstrates a simple navigation structure in a web application.
              In a real-world scenario, this page would contain information about the company,
              its mission, vision, and values.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-md border-l-4 border-blue-600">
              <h3 className="font-semibold text-blue-800 mb-2">Learning Objectives</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Understanding page navigation</li>
                <li>Creating reusable components</li>
                <li>Managing application state</li>
                <li>Implementing user interface design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
