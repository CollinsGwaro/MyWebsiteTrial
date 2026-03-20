import { ArrowLeft } from 'lucide-react';

interface ClientPublicPageProps {
  onBack: () => void;
}

function ClientPublicPage({ onBack }: ClientPublicPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition duration-200"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Client & Public</h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              This is the Client & Public page. Public information and client resources are available here.
            </p>

            <p>
              This section serves as a portal for clients and the general public to access
              information, resources, and services. It typically includes FAQs, contact
              information, and publicly available documents.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-red-50 rounded-md border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">For Clients</h3>
                <p className="text-gray-600">
                  Access your account information, project updates, and support resources.
                </p>
              </div>

              <div className="p-4 bg-red-50 rounded-md border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Public Resources</h3>
                <p className="text-gray-600">
                  Browse our public documentation, announcements, and general information.
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-md">
                <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                <p className="text-gray-600">
                  Email: info@example.com<br />
                  Phone: (555) 123-4567<br />
                  Hours: Monday - Friday, 9AM - 5PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientPublicPage;
