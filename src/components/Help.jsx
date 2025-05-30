import { FileText, MessageCircle, HelpCircle, Book } from 'lucide-react';

const Help = () => {
  return (
    <Layout title="Help & Documentation">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          Welcome to the RSA Policy Manager plugin for WordPress. This plugin helps you manage Road Side Assistance policies for your automotive business.
        </p>
        
        <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Quick Start Guide:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Configure your business details in the Settings tab</li>
          <li>Set up your policy pricing and options</li>
          <li>Use shortcodes to add policy forms to your pages</li>
          <li>Start managing your RSA policies!</li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <FaqItem 
            question="How do I add a policy purchase form to my page?"
            answer="Use the shortcode [rsa_policy_form] on any page or post where you want the form to appear."
          />
          
          <FaqItem 
            question="Can I customize the email notifications?"
            answer="Yes, you can customize all email templates in the Settings tab under Email Notification Settings."
          />
          
          <FaqItem 
            question="How do I export policy data?"
            answer="In the Policies tab, click on the 'Export' button to download your policy data as a CSV file."
          />
          
          <FaqItem 
            question="Is payment gateway integration available?"
            answer="Yes, the plugin supports integration with popular payment gateways like Razorpay, PayU, and PayTM. Configure these in the Settings tab."
          />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-6">
          If you need additional assistance with the RSA Policy Manager plugin, please contact our support team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="#" 
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Book size={24} className="text-blue-600 mr-3" />
            <span className="font-medium">Documentation</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <MessageCircle size={24} className="text-blue-600 mr-3" />
            <span className="font-medium">Contact Support</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

const FaqItem = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
      <h3 className="text-lg font-medium text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Help;