import { ArrowLeft } from 'lucide-react';

interface ContractorPageProps {
  onBack: () => void;
}

function ContractorPage({ onBack }: ContractorPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-200"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Contractor</h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              This is the Contractor page. Here you can manage contractor-related information.
            </p>

            <p>
              In a production environment, this section would typically include contractor
              profiles, project assignments, billing information, and performance metrics.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-md border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Contractor profiles</li>
                  <li>Project tracking</li>
                  <li>Time management</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-md border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Streamlined workflows</li>
                  <li>Better organization</li>
                  <li>Enhanced collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractorPage;
