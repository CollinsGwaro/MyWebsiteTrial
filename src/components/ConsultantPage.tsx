import { ArrowLeft } from 'lucide-react';

interface ConsultantPageProps {
  onBack: () => void;
}

function ConsultantPage({ onBack }: ConsultantPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-200"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-6">Consultant</h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              This is the Consultant page. Access consulting services and resources here.
            </p>

            <p>
              This section would typically provide access to consulting expertise,
              strategic guidance, and professional advice for various business needs.
            </p>

            <div className="mt-6 p-4 bg-orange-50 rounded-md border-l-4 border-orange-600">
              <h3 className="font-semibold text-orange-800 mb-2">Services Offered</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Strategic planning and consulting</li>
                <li>Business process optimization</li>
                <li>Market analysis and research</li>
                <li>Technology implementation guidance</li>
                <li>Change management support</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600 italic">
                "Expert guidance to help your organization achieve its goals."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantPage;
