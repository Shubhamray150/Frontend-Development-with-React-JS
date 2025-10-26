import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="px-3.5 h-full flex-1 flex flex-col gap-2.5">
      <div className="text-white mb-5">Contact Us</div>
      <div className="text-[#bdbdbd] flex items-center gap-2">
        <FaLocationArrow color="gray" size={12} />
        <span>9067 Zurich, Switzerland 87</span>
      </div>
      <div className="text-[#bdbdbd] flex items-center gap-2">
        <CiMail size={20} color="gray" />
        <span>abc@gmail.com</span>
      </div>
      <div className="text-[#bdbdbd] flex items-center gap-2">
        <FaPhoneAlt size={14} color="gray" />
        <span className="text-amber-600">01-234-5678</span>
      </div>
    </div>
  );
};

export default ContactUs;
