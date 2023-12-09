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
    <div className="gridControls">
      <Grid gridSize={gridSize} />
      <input
        type="range"
        min="1"
        max="64"
        value={gridSize}
        onChange={gridSizeChange}
        id="gridSizeRange"
      />
    </div>
  );
};

export default Controls;
