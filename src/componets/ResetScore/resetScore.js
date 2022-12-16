import React from "react";
import "./resetScore.css"

export const ResetScore = (resetBoard) => {
    
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset All</button>
    )
}