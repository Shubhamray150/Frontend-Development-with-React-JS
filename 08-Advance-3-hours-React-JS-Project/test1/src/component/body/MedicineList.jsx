import React, { useContext } from "react";
import MedicineItem from "./MedicineItem";
import medicineContext from "../../store/medicine/medicineContext";

const MedicineList = () => {
  const medicineCtx = useContext(medicineContext);
  console.log(medicineCtx.medicineItem);

  return (
    <ul className="mx-auto">
      {medicineCtx.medicineItem.map((item) => {
        return <MedicineItem item={item} />;
      })}
    </ul>
  );
};

export default MedicineList;
