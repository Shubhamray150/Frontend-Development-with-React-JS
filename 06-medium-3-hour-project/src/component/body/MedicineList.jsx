import React, { useContext } from "react";
import "./MedicineList.css";
import Card from "../UI/Card";
import MedicineItem from "./MedicineItem";
import medicineContext from "../../Store/medicinecontext";

const dummyData = [
  {
    id: "m1",
    name: "dolo",
    description: "for fever",
    price: "20",
    quantity: "200",
  },
  {
    id: "m2",
    name: "paracetamol",
    description: "for fever",
    price: "20",
    quantity: "100",
  },
];

const MedicineList = (props) => {
  const medCtx = useContext(medicineContext);

  return (
    <Card className="medicineList">
      <ul>
        {medCtx.medicineItem.map((item) => {
          return <MedicineItem key={item.id} data={item} />;
        })}
      </ul>
    </Card>
  );
};

export default MedicineList;
