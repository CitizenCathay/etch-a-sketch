import React, { useEffect, useRef, useState, useCallback } from "react";

interface GridProps {
  gridSize: number;
  inputColor: string;
  mode: string;
}

const Grid: React.FC<GridProps> = ({ gridSize, inputColor, mode }) => {
  // React.FC<GridProps>: Indicates that Grid is a functional component (FC) that accepts props defined by the GridProps type/interface

  const gridContainerStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
  };

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  // reference to track whether the mouse button is currently pressed

  const handleMouseDown = useCallback(() => {
    isMouseDownRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
  }, []);

  const handleTouchStart = useCallback(() => {
    handleMouseDown();
  }, [handleMouseDown]);

  const handleTouchEnd = useCallback(() => {
    handleMouseUp();
  }, [handleMouseUp]);

  const handleColorChange = useCallback(
    (target: HTMLDivElement) => {
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
    },
    [inputColor, mode]
  );

  const handleMouseInteraction = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isMouseDownRef.current) {
        const target = event.target as HTMLDivElement;
        handleColorChange(target);
      }
    },
    [handleColorChange]
  );

  const handleTouchMove = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (isMouseDownRef.current) {
        const touch = event.touches[0];
        const element = document.elementFromPoint(
          touch.clientX,
          touch.clientY
        ) as HTMLDivElement;
        if (element && element.classList.contains("grid-cell")) {
          const gridCellElement = element as HTMLDivElement;
          handleColorChange(gridCellElement);
        }
      }
    },
    [handleColorChange]
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            style={{ backgroundColor: "white" }} // Set default background color
          ></div>
        );
      }
      setGridCells(cells); // Update grid cells in the state
    },
    [
      handleMouseDown,
      handleMouseUp,
      handleMouseInteraction,
      handleTouchStart,
      handleTouchEnd,
      handleTouchMove,
    ]
  );

  useEffect(() => {
    setGridCells([]);
    createGrid(gridSize); // Create new grid cells when gridSize changes
  }, [gridSize, createGrid]);

  return (
    <div
      className="gridContainer mt-1 xl:ml-56 w-80 h-80 md:w-[39rem] md:h-[39rem] sm:h-[30rem] sm:w-[30rem] border-2 border-gray-800 rounded-sm	"
      ref={gridContainerRef}
      style={gridContainerStyles}
    >
      {gridCells}
    </div>
  );
};

export default Grid;
