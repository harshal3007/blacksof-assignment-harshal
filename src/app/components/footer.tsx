import React from "react";
import Image from "next/image";
import Logo from "@/app/images/Layer 1.png";
import BackgroundLogo from "@/app/images/Group.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-gray-800 pt-12 pb-6 px-6 md:px-16 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-50 filter brightness-110 contrast-385 pointer-events-none select-none">
        <Image
          src={BackgroundLogo}
          alt="Background Watermark"
          fill
          className="object-contain drop-shadow-md"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-start gap-8 relative z-10">
        <div className="py-7">
          <Image src={Logo} alt="Supreme Group" width={150} height={150} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full">
          <div>
            <h3 className="font-semibold mb-3">APPLICATIONS</h3>
            <ul className="space-y-6 text-sm">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Nonwoven</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li>Who We Are</li>
              <li>Global Competency</li>
              <li>Innovation</li>
              <li>ESG Impact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">MORE</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">FOLLOW US</h3>
            <ul className="space-y-2 text-sm">
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-10 pt-4 text-sm text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 px-1 relative z-10">
        <p>©2023. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
      </div>
    </footer>
  );
};

export default Footer;
