import React, { useState, useCallback, useEffect } from "react";
import Grid from "./Grid";

const Controls = () => {
  const [gridSize, setGridSize] = React.useState<number>(16);
  const [inputColor, setInputColor] = useState("#1F2937"); // Initial color value
  const [selectedButton, setSelectedButton] = useState<{ mode: string }>({
    mode: "color",
  });

  const gridSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setGridSize(newValue);
  };

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

  const debouncedSetInputColor = debounce((color: string) => {
    setInputColor(color);
  }, 200);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    debouncedSetInputColor(newColor);
  };

  const handleButtonClick = (mode: string) => {
    if (mode === "color") {
      setSelectedButton({ mode });
    } else if (mode === "eraser") {
      setSelectedButton({ mode });
    } else if (mode === "rainbow") {
      setSelectedButton({ mode });
    }
  };

  return (
    <div className="gridUI flex	justify-center items-center	flex-col xl:flex-row mb-6">
      <Grid
        gridSize={gridSize}
        inputColor={inputColor}
        mode={selectedButton.mode}
      />
      <div className="gridControls xl:ml-12 flex flex-col space-y-6 mt-6 sm:mt-5">
        <input
          type="color"
          className="w-44 h-12 appearance-none bg-transparent p-0 rounded-lg border-none"
          value={inputColor}
          onChange={handleColorChange}
        ></input>
        <button
          className={`border rounded border-stone-500 lg:text-lg px-6 py-1 shadow-lg transition duration-300 transform hover:scale-110 hover:bg-gray-800 hover:text-white ${
            selectedButton.mode === "color"
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("color")}
        >
          Color Mode
        </button>
        <button
          className={`border rounded border-stone-500 lg:text-lg px-6 py-1 shadow-lg transition duration-300 transform hover:scale-110 hover:bg-gray-800 hover:text-white ${
            selectedButton.mode === "rainbow"
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("rainbow")}
        >
          Rainbow Mode
        </button>
        <button
          className={`border rounded border-stone-500 lg:text-lg px-6 py-1 shadow-lg transition duration-300 transform hover:scale-110 hover:bg-gray-800 hover:text-white ${
            selectedButton.mode === "eraser"
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("eraser")}
        >
          Eraser
        </button>
        <button className="border rounded border-stone-500  lg:text-lg px-6 py-1 shadow-lg transition duration-200 transform hover:scale-110 hover:bg-gray-800 hover:text-white">
          Clear
        </button>
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
