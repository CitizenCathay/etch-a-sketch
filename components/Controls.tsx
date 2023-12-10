import React, { useState } from "react";
import Grid from "./Grid";

const Controls = () => {
  const [gridSize, setGridSize] = React.useState<number>(16);

  const gridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10); // Extract the new value from the input
    setGridSize(newValue);
  };
  /* console.log(gridSize); */
  return (
    <div className="gridControls flex	justify-center items-center	flex-col sm:flex-row mb-6">
      <Grid gridSize={gridSize} />
      <div className="gridControls sm:ml-4 flex flex-col space-y-6 mt-6 sm:mt-0">
        <button className="border rounded border-black ">Color Mode</button>
        <button className="border rounded border-black">Rainbow Mode</button>
        <button className="border rounded border-black">Eraser</button>
        <button className="border rounded border-black">Clear</button>
        <div className="sizeControl">
          <p className="select-none	">
            Grid Size: {gridSize} × {gridSize}
          </p>
          <input
            type="range"
            min="1"
            max="64"
            value={gridSize}
            onChange={gridSizeChange}
            id="gridSizeRange"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
