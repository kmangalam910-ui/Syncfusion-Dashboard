import React from "react";
import { ChartsHeader, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-(--secondary-dark-bg)">
      <ChartsHeader title="Inflation Rate" category="Line" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
