import React from "react";

const Filter = ({
  title,
  options,
  filterType,
  filters,
  handleFilterChange,
}) => {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            value={option}
            checked={filters[filterType].includes(option)}
            onChange={(e) => handleFilterChange(e, filterType)}
          />
          {option}
        </div>
      ))}
      <span className="border-b my-1"></span>
    </div>
  );
};

export default Filter;
