import React from "react";

const Translation = ({ doStuff, setInput, result }) => {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="action-btn" onClick={doStuff}>
        DO YOU STUFF!
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
};

export default Translation;
