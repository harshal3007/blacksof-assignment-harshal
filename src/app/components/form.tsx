"use client";

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#0568B1] text-white px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Get in touch
          </h2>
          <div className="w-12 sm:w-16 h-[2px] bg-white mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            For general enquiries
          </p>

          <div className="space-y-5 text-sm sm:text-base">
            <div>
              <p className="font-semibold">Address :</p>
              <p>110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
              <p className="font-semibold">Phone :</p>
              <p>+91 22 25208822</p>
            </div>
            <div>
              <p className="font-semibold">Email :</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        <form className="space-y-5 sm:space-y-6 text-sm sm:text-base">
          <div>
            <label className="block mb-1 sm:mb-2">Full name</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-white placeholder:text-white"
              placeholder=" "
            />
          </div>
          <div>
            <label className="block mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-white placeholder:text-white"
              placeholder=" "
            />
          </div>
          <div>
            <label className="block mb-1 sm:mb-2">Company</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-white placeholder:text-white"
              placeholder=" "
            />
          </div>
          <div>
            <label className="block mb-1 sm:mb-2">Message</label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-white placeholder:text-white resize-none"
              placeholder=" "
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-2 sm:mt-4 border border-white text-white px-8 sm:px-10 py-2 rounded-full hover:bg-white hover:text-[#0568B1] transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
