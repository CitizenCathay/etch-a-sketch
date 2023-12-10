import React from "react";

interface GridProps {
  gridSize: number;
}

const Grid: React.FC<GridProps> = ({ gridSize }) => {
  // Import gridSize value from Controls parent component

  return (
    <div className="gridComponent mt-1 sm:ml-36">
      <div className="w-56 h-56 sm:w-72 sm:h-72 border-2 border-red-500 "></div>
    </div>
  );
};

export default Grid;
