import { useState, useRef } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState('');

  function handleClick(){
    setPlayerName(enteredPlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'Guest'}</h2>
      <p>
        <input type="text" ref={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
