import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

/*   function handleTyping(event) {
    let hexColor;
    const randomHexColor = (() => {
      // Generate a random number between 0 and 16777215 (0xFFFFFF)
      const randomNum = Math.floor(Math.random() * 16777215);
      // Convert the number to a hexadecimal string
      hexColor = randomNum.toString(16);
      // Pad with leading zeros if necessary to ensure 6 digits
      hexColor = hexColor.padStart(6, "0");
      return `#${hexColor}`;
    })();
    if (!event.repeat) {
      event.target.style.backgroundColor = randomHexColor;
    }
  } */

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        // onKeyDown={handleTyping}
        //onKeyDown={handleTyping}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* Ternary operator alternative to the if statement and playerName variable:
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input></input>
        )}*/}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
