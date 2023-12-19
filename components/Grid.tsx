import React, { useEffect, useRef, useState, useCallback } from "react";

interface GridProps {
  gridSize: number;
  inputColor: string;
  mode: string;
}

const Grid: React.FC<GridProps> = ({ gridSize, inputColor, mode }) => {
  // Import props from Controls parent component

  const gridContainerStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  };

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  // State to manage mouse down/up

  const handleMouseDown = useCallback(() => {
    isMouseDownRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
  }, []);

  const handleMouseInteraction = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isMouseDownRef.current) {
        const target = event.target as HTMLDivElement;
        if (mode === "eraser") {
          target.style.backgroundColor = "#FFFFFF";
        } else if (mode === "rainbow") {
          const randomR = Math.floor(Math.random() * 256);
          const randomG = Math.floor(Math.random() * 256);
          const randomB = Math.floor(Math.random() * 256);
          target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        } else if (mode === "color") {
          target.style.backgroundColor = inputColor;
        }
      }
    },
    [inputColor, mode]
  );

  const [gridCells, setGridCells] = useState<JSX.Element[]>([]);

  const createGrid = useCallback(
    (gridSize: number) => {
      let cells: JSX.Element[] = [];

      for (let i = 0; i < gridSize * gridSize; i++) {
        let cellKey = `cell-${gridSize}-${i}`;
        cells.push(
          <div
            key={cellKey}
            className="grid-cell select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseInteraction}
            style={{ backgroundColor: "white" }} // Set default background color
          ></div>
        );
      }
      setGridCells(cells); // Update grid cells in the state
    },
    [handleMouseDown, handleMouseUp, handleMouseInteraction]
  );

  useEffect(() => {
    setGridCells([]);
    createGrid(gridSize); // Create new grid cells when gridSize changes
  }, [gridSize, createGrid]);

  return (
    <div
      className="gridContainer mt-1 xl:ml-56 w-96 h-96 md:w-[39rem] md:h-[39rem] sm:h-[30rem] sm:w-[30rem] border-2 border-gray-800 rounded-sm	"
      ref={gridContainerRef}
      style={gridContainerStyles}
    >
      {gridCells}
    </div>
  );
};

export default Grid;
