import React, { useState, useCallback } from "react";
import Grid from "./Grid";
import Buttons from "./Buttons";

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

  const [selectedColor, setSelectedColor] = useState("#1F2937"); // Initial color value

  const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number
  ): ((...args: Parameters<F>) => void) => {
    let timeoutId: NodeJS.Timeout;
    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedSetSelectedColor = debounce((color: string) => {
    setSelectedColor(color);
  }, 200);

  const handleColorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = event.target.value;
      debouncedSetSelectedColor(newColor);
    },
    [debouncedSetSelectedColor]
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
        <Buttons />
        <div className="sizeControl">
          <p className="select-none	lg:text-lg text-gray-800">
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
