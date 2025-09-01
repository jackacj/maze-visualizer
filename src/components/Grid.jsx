import { useState } from "react"
import Cell from "./Cell.jsx"

function Grid({ rows=10, cols=10}) {
    // Create 2D Array of Cells & Set as Default State
    const [grid, setGrid] = useState(
        Array.from({ length:rows }, () =>
            Array.from({ length:cols }, () => 
                ({
                    colour: "bg-neutral-200",
                    border: "border-2 border-neutral-500"
                })))
    )

    // Render Grid
    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, 2rem)`}}>
            {grid.map((row, i) =>
                row.map((cell, j) => (
                    <Cell
                        // Pass Props to Cell
                        key={`${i},${j}`}
                        colour={cell.colour}
                        border={cell.border}
                        // onClick={() => Interaction}
                    />
                ))
            )}
        </div>
    )
}

export default Grid