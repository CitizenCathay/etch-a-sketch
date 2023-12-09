import React from "react";

interface GridProps {
  gridSize: number;
}

const Grid: React.FC<GridProps> = ({ gridSize }) => {
  // Import gridSize value from Controls parent component

  return (
    <div className="grid">
      <p className="select-none	">
        Grid Size: {gridSize} × {gridSize}
      </p>
    </div>
  );
};

export default Grid;
