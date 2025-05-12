import Image from "next/image";
import Logo from "@/app/images/Layer 1.png";
import icon from "@/app/images/translate 1.png";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Supreme Group" width={120} height={120} />
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-[#4FC3F7] hover:bg-[#29B6F6] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            Contact Us
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-black text-base sm:text-lg font-semibold"
          >
            in
          </a>
          <div className="flex items-center gap-1 text-xs sm:text-sm font-medium">
            <Image src={icon} alt="Language Icon" width={28} height={28} />
            <span>ENG</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
