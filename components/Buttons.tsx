import React, { useState, useEffect } from "react";

const Buttons = () => {
  const [selectedButton, setSelectedButton] = useState<{ mode: string }>({
    mode: "color",
  });

  const handleButtonClick = (buttonValue: string) => {
    setSelectedButton((prev) => ({
      mode: buttonValue === prev.mode ? prev.mode : buttonValue,
    }));
  };

  useEffect(() => {
    console.log("Selected Mode:", selectedButton.mode);
  }, [selectedButton]);

  return (
    <>
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
      <button className="border rounded border-stone-500  lg:text-lg px-6 py-1 shadow-lg transition duration-200 transform hover:scale-110 hover:bg-gray-800 hover:text-white">
        Toggle Cells
      </button>
    </>
  );
};

export default Buttons;
