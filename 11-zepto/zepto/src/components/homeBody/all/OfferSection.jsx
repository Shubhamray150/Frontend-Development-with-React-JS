import React from "react";

const OfferSection = () => {
  return (
    <div className="flex justify-center items-center my-2 w-full">
      <div className="flex w-[1200px] justify-between ">
        <div className="flex justify-center bg-black rounded-[1rem] w-[49%] mb-[3.25rem]  h-[300px] ">
          <div>
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/eaff67d6-aa53-40fe-a6ba-38793acdd518.png"
              alt="Super Sale"
            />
          </div>
          <div>
            <div>
              <section></section>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-[#fdd2d2] w-[49%] rounded-[1rem] mb-[3.25rem] h-[300px]">
          <div>
            <img
              src="https://cdn.zeptonow.com/production/tr:w-1280,ar-2368-528,pr-true,f-auto,q-80/inventory/banner/874d9674-2f4f-4f60-bc5b-9fb52084a738.png"
              alt="Beauty Lit"
            />
          </div>
          <div>
            <div>
              <section></section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
