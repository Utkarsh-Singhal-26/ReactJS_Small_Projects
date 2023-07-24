import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [column, setColumn] = useState({
    count: 1,
    gap: 15,
    style: "none",
    width: 2,
    color: "#000000"
  });

  const columnStyle = {
    columnCount: `${column.count}`,
    columnGap: `${column.gap}px`,
    columnRule: `${column.width}px ${column.style} ${column.color}`
  };

  function onChange(event) {
    const { name, value } = event.target;
    setColumn((prevColumn) => ({
      ...prevColumn,
      [name]: value
    }));
  }

  return (
    <div className="App">
      <div className="controls">
        <h4>Multiple Column Generator</h4>
        <p> @ Code by Utkarsh Singhal </p>
        <label>Column Counts : {column.count}</label>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          name="count"
          value={column.count}
          onChange={onChange}
        />
        <label>Column Gap : {column.gap} px</label>
        <input
          type="range"
          min="0"
          max="50"
          name="gap"
          value={column.gap}
          onChange={onChange}
        />
        <label>Column Rule Style : </label>
        <select name="style" value={column.style} onChange={onChange}>
          <option value="solid">Solid</option>
          <option value="dotted">Dotted</option>
          <option value="dashed">Dashed</option>
          <option value="double">Double</option>
          <option value="groove">Groove</option>
          <option value="ridge">Ridge</option>
          <option value="inset">Inset</option>
          <option value="outset">Outset</option>
          <option value="none">None</option>
          <option value="hidden">Hidden</option>
        </select>
        <label>Column Rule Width : {column.width}</label>
        <input
          type="range"
          min="1"
          max="20"
          name="width"
          value={column.width}
          onChange={onChange}
        />
        <div>
          <label>Column Rule Color : </label>
          <input
            type="color"
            name="color"
            value={column.color}
            onChange={onChange}
          />
        </div>
        <div className="details">
          <p>Column Style :</p>
          <pre>{JSON.stringify(columnStyle, null, 2)}</pre>
        </div>
      </div>
      <div className="output">
        <div className="box" style={columnStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          lectus in lacus fermentum, eu gravida purus consectetur. Maecenas id
          mauris eu enim fringilla varius. Vestibulum consequat cursus mi, ac
          vestibulum velit pulvinar in. Suspendisse potenti. Proin eleifend
          massa eget massa pulvinar fringilla. Mauris sed libero vitae justo
          aliquet congue. Donec varius tellus a elit bibendum tincidunt. In
          gravida mauris a est aliquet, vitae lobortis purus sagittis.
          Suspendisse potenti. Phasellus nec dolor ut sem cursus vulputate.
        </div>
      </div>
    </div>
  );
}
