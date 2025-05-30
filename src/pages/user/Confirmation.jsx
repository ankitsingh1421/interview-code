import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Stepper from '../../components/Stepper';
import { Check, Download, Phone, ArrowLeft } from 'lucide-react';
import { addYears, format } from 'date-fns';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const policy = location.state?.policy;
  
  useEffect(() => {
    // Redirect if no policy data is available
    if (!policy) {
      navigate('/');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [policy, navigate]);
  
  if (!policy) {
    return null; // Don't render anything while redirecting
  }
  
  // Generate expiry date (3 years from now for display)
  const today = new Date();
  const expiryDate = format(addYears(today, 3), 'dd/M/yyyy');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Stepper />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-10 w-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-green-600 font-semibold mb-6">Your RSA policy has been activated</p>
          
          <div className="bg-blue-50 p-4 rounded-md mb-8">
            <h2 className="text-lg font-semibold mb-2">Email Sent Successfully!</h2>
            <p className="text-gray-700">
              A confirmation email with your policy details has been sent to <span className="font-semibold">{policy.email}</span>
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-left">Policy Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-600 text-sm">Policy Number:</p>
                <p className="font-semibold">{policy.id}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Policy Type:</p>
                <p className="font-semibold">{policy.policyType}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Customer Name:</p>
                <p className="font-semibold">{policy.customerName}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Vehicle Number:</p>
                <p className="font-semibold">{policy.vehicleNumber}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Valid Until:</p>
                <p className="font-semibold">{policy.expiryDate}</p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Amount Paid:</p>
                <p className="font-semibold">₹{policy.amount + Math.round(policy.amount * 0.18)}</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 text-left">
              Your policy documents have been emailed to you. You can also download them below.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-left">How to use your RSA service</h2>
            <p className="text-left mb-2">In case of emergency, call our 24/7 helpline:</p>
            
            <div className="bg-blue-600 text-white p-4 rounded-md flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-xl font-bold">1800-123-4567</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Policy
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Confirmation;