import React, { useState, useCallback } from "react";
import Grid from "./Grid";

const Controls = () => {
  const [gridSize, setGridSize] = React.useState<number>(16);
  // Initialize state variable gridSize with default value of 16, setGridSize is function used to update the gridSize state.

  const gridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onChange event handler triggers this function

    const newValue = parseInt(event.target.value, 10);
    // Extracts value from event object triggered by change in input element
    // Parses extracted value as integer using the parseInt function
    // Second argument (10) in parseInt specifies the base (decimal in this case) for the conversion

    setGridSize(newValue); //Updates the gridSize state with the parsed integer value obtained from the input element's changed value.
  };

  const [selectedColor, setSelectedColor] = useState("#000000"); // Initial color value

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedColor(event.target.value);
    },
    [setSelectedColor]
  );

  return (
    <div className="gridUI flex	justify-center items-center	flex-col xl:flex-row mb-6">
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
            className="w-44"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
