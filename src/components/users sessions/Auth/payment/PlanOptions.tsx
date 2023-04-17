// PlanOptions.js
import React from "react";

const PlanOptions = ({ options, selectedOption, onOptionChange }) => {
  const handleOptionChange = (event) => {
    onOptionChange(event.target.value);
  };

  return (
    <div>
      <div
        className="bg-slate-800 text-slate-200 p-2 rounded-sm max-w-fit border border-slate-600/30 shadow-lg shadow-slate-300/5"
        //   onClick={() => onOptionChange(option.value)}
      >
        <h3 className=" text-xl font-bold">20% ROI </h3>
        <h3> after 3 months</h3>
      </div>

      <input type="hidden" name="plan" value={selectedOption} />
    </div>
  );
};

export default PlanOptions;
