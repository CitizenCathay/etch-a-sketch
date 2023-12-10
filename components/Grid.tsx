import React, { useEffect, useRef, useState } from "react";

interface GridProps {
  gridSize: number;
  selectedColor: string;
}

const Grid: React.FC<GridProps> = ({ gridSize, selectedColor }) => {
  // Import gridSize value from Controls parent component

  useEffect(() => {
    createGrid(gridSize, selectedColor); // Initial grid size
  }, [gridSize, selectedColor]);

  const createGrid = (gridSize: number, selectedColor: string) => {
    const gridContainer = document.querySelector(
      ".gridContainer"
    ) as HTMLDivElement | null;
    if (gridContainer) {
      gridContainer.innerHTML = ""; // Clear previous content
      gridContainer.style.display = "grid";
      gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
      gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

      let isMouseDown = false;
      const handleMouseDown = () => {
        isMouseDown = true;
      };
      const handleMouseUp = () => {
        isMouseDown = false;
      };
      const handleMouseInteraction = (event: MouseEvent) => {
        if (isMouseDown) {
          const target = event.target as HTMLDivElement | null;
          if (target && "classList" in target) {
            target.style.backgroundColor = selectedColor;
          }
        }
      };
      for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement("div");
        gridCell.className = "grid-cell select-none border-2 border-red-500";
        gridCell.addEventListener("mousedown", handleMouseDown);
        gridCell.addEventListener("mouseup", handleMouseUp);
        gridCell.addEventListener("mousemove", handleMouseInteraction);
        gridContainer.appendChild(gridCell);
      }
    }
  };

  return (
    <div className="gridComponent mt-1 xl:ml-56">
      <div className="gridContainer w-96 h-96 md:w-[39rem] md:h-[39rem] sm:h-[30rem] sm:w-[30rem] border-2 border-red-500 "></div>
    </div>
  );
};

export default Grid;
