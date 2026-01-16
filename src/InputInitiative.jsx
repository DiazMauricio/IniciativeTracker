import { useState } from "react";
import "./InputInitiative.css";

const InputInitiative = ({ index, onAdd, item }) => {
  const [name, setName] = useState(item.name);
  const [initiative, setInitiative] = useState(item.initiative);
  const [color, setColor] = useState(item.color || "#000000");
  const [isPJ, setIsPJ] = useState(item.isPJ || false);

  const handleSetName = (e) => {
    const name = e.target.value;
    setName(name);
    onAdd(index, { name, initiative, color, isPJ });
  };

  const handleSetInitiative = (e) => {
    const initiative = e.target.value;
    setInitiative(initiative);
    onAdd(index, { name, initiative, color, isPJ });
  };

  const handleSetColor = (e) => {
    const color = e.target.value;
    setColor(color);
    onAdd(index, { name, initiative, color, isPJ });
  };

  const handleSetIsPJ = (e) => {
    const isPJ = e.target.checked;
    setIsPJ(isPJ);
    onAdd(index, { name, initiative, color, isPJ });
  };

  return (
    <div
      className="InputInitiative"
      style={{
        borderLeft: `8px solid ${color}`,
      }}
    >
      <input
        className="Name text"
        type="text"
        value={name}
        onChange={(e) => handleSetName(e)}
        placeholder="Enter name"
      />
      <input
        className="Initiative text"
        type="text"
        value={initiative}
        onChange={(e) => handleSetInitiative(e)}
        placeholder="Enter initiative"
      />
      <input
        className="color"
        type="color"
        value={color}
        onChange={(e) => handleSetColor(e)}
        placeholder="Enter color"
      />
      <input
        className="checbox"
        type="checkbox"
        checked={isPJ}
        onChange={(e) => handleSetIsPJ(e)}
      />
    </div>
  );
};

export default InputInitiative;
