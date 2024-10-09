import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Privacy & Policy</h2>
        <div className="flex items-center justify-center mb-8">
          <Shield size={48} className="text-yellow-500 mr-4" />
          <p className="text-lg max-w-2xl text-gray-700">
            At SupportHub, we are committed to protecting your privacy and ensuring the security of your personal information. Our policies comply with GDPR and other relevant data protection regulations. We only collect and use data necessary to provide our services and continuously improve your experience.
          </p>
        </div>
        <div className="text-center">
          <a href="#" className="text-yellow-600 hover:underline">Read our full Privacy Policy</a>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;