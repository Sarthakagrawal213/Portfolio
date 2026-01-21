import React, { useState, useRef, useEffect } from 'react'
import Macwindow from './Macwindow'

const Cli = () => {
    const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [history]);

  const handleCommand = () => {
    if (!input) return;

    let output = `You typed: ${input}`; // simplest "emulation"

    if (input.toLowerCase() === "clear") {
      setHistory([]);
    } else {
      setHistory([...history, { cmd: input, output }]);
    }

    setInput("");
  };
  return (
    <Macwindow>
        <div style={{
          background: "#000",
          color: "#0f0",
          padding: "10px",
          fontFamily: "monospace",
          height: "300px",
          overflowY: "auto",
        }}
        onClick={() => inputRef.current.focus()} id="cli">
          {history.map((item, idx) => (
          <div key={idx}>
            <div>&gt; {item.cmd}</div>
            <div>{item.output}</div>
          </div>
        ))}
        <div>
          &gt;{" "}
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            style={{
              background: "transparent",
              border: "none",
              color: "#0f0",
              outline: "none",
              fontFamily: "monospace",
            }}
          />
        </div>
        </div>
    </Macwindow>
  )
}

export default Cli
