import React, { useState } from "react";
import Grid from "./Grid";

const Controls = () => {
  const [gridSize, setGridSize] = React.useState<number>(16);
  const gridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10); // Extract the new value from the input
    setGridSize(newValue);
  };
  /* console.log(gridSize); */

  const [selectedColor, setSelectedColor] = useState("#000000"); // Initial color value
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value); // Update the selected color state
  };

  return (
    <div className="gridControls flex	justify-center items-center	flex-col xl:flex-row mb-6">
      <Grid gridSize={gridSize} selectedColor={selectedColor} />
      <div className="gridControls xl:ml-12 flex flex-col space-y-6 mt-6 sm:mt-5">
        <input
          type="color"
          className="w-44 h-12 appearance-none bg-transparent p-0 rounded-lg border-none"
          value={selectedColor}
          onChange={handleColorChange}
        ></input>
        <button className="border rounded border-black lg:text-lg px-6 py-1 shadow-lg">
          Color Mode
        </button>
        <button className="border rounded border-black  lg:text-lg px-6 py-1 shadow-lg">
          Rainbow Mode
        </button>
        <button className="border rounded border-black  lg:text-lg px-6 py-1 shadow-lg">
          Eraser
        </button>
        <button className="border rounded border-black  lg:text-lg px-6 py-1 shadow-lg">
          Clear
        </button>
        <button className="border rounded border-black  lg:text-lg px-6 py-1 shadow-lg">
          Toggle Cells
        </button>
        <div className="sizeControl">
          <p className="select-none	lg:text-lg">
            Grid Size: {gridSize} × {gridSize}
          </p>
          <input
            type="range"
            min="1"
            max="64"
            value={gridSize}
            onChange={gridSizeChange}
            id="gridSizeRange"
            className="w-44" /* For future styling */
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
