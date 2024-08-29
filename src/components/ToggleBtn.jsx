import React from "react";

export default function ToggleBtn() {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={isOn}
        onClick={(e) => setIsOn(e.target.val)}
      />
      <br />
      <button onClick={() => setIsOn((prevState) => 
!prevState)}>Toggle</button>
    </>
  );
}