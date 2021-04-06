import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [Color, setColor] = useState("white");

  return (
    <div>
      {Color}
      <button onClick={() => setColor("Black")}>Change to Black</button>
      <button onClick={() => setColor("White")}>Change to white</button>
    </div>
  );
}

export default ColorBox;
