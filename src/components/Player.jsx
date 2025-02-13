import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [playerNameInput, setName] = useState(null);

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerNameInput ?? "unknown player"}!</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
