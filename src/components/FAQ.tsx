import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { question: 'How do I get started with SupportHub?', answer: 'Sign up for an account on our website, and our team will guide you through the setup process.' },
    { question: 'What types of businesses do you support?', answer: 'We cater to businesses of all sizes across various industries, from startups to enterprise-level companies.' },
    { question: 'Can I integrate SupportHub with my existing systems?', answer: 'Yes, we offer seamless integration with many popular CRM and helpdesk systems.' },
    { question: 'How secure is my customer data?', answer: 'We employ industry-standard encryption and security measures to ensure the safety of your data.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-yellow-50 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;