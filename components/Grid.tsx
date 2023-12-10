import React, { useEffect, useRef, useState } from "react";

interface GridProps {
  gridSize: number;
}

const Grid: React.FC<GridProps> = ({ gridSize }) => {
  // Import gridSize value from Controls parent component

  useEffect(() => {
    createGrid(gridSize); // Initial grid size
  }, [gridSize]);

  const createGrid = (gridSize: number) => {
    const gridContainer = document.querySelector(
      ".gridContainer"
    ) as HTMLDivElement | null;
    if (gridContainer) {
      gridContainer.innerHTML = ""; // Clear previous content

      gridContainer.style.display = "grid";
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

      for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "grid-cell border-2 border-red-500";
        gridContainer.appendChild(gridCell);
      }
    }
  };

  return (
    <div className="gridComponent mt-1 lg:ml-36">
      <div className="gridContainer w-96 h-96 md:w-[39rem] md:h-[39rem] sm:h-[30rem] sm:w-[30rem] border-2 border-red-500 "></div>
    </div>
  );
};

export default Grid;
