import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard";

const ElectricCategory = () => {
  return (
    <div className="flex flex-wrap justify-between border-b py-5 lg:px-20">
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <ElectricCategoryCard key={item} />
      ))}
    </div>
  );
};

export default ElectricCategory;