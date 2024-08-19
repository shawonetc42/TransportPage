// components/FAQPage.js

import Image from "next/image";

export default function FAQPage() {
  return (
    <div
      id="faq"
      className=" bg-gray-100 flex items-center justify-center mt-10"
    >
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-200">
          <Image
            src="/ship1.jpg"
            alt="Description"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side FAQ Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                What is your return policy?
              </h2>
              <p className="mt-2 text-gray-600">
                Our return policy allows you to return items within 30 days of
                receipt for a full refund. Items must be in original condition.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                How can I contact customer support?
              </h2>
              <p className="mt-2 text-gray-600">
                You can contact our customer support team via email at
                support@example.com or by phone at (123) 456-7890. We are
                available 24/7 to assist you.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700">
                Do you offer international shipping?
              </h2>
              <p className="mt-2 text-gray-600">
                Yes, we offer international shipping to most countries. Please
                check our shipping policy for more details on rates and delivery
                times.
              </p>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      </div>
    </div>
  );
}
