import React from "react";

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex justify-between border-b border-gray-800 pb-2">
      <span className="font-semibold text-gray-200">{label}</span>
      <span className="text-gray-400">{value}</span>
    </div>
  );
};

export default InfoRow;
