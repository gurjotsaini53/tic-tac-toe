import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  //   const [value, setValue] = useState(null);
  //   function handleClick() {
  //     console.log("Clicked!");
  // setValue("X");
  //   }

  return (
    <button className="square-box" onClick={onSquareClick}>
      {value}
    </button>
  );
}
