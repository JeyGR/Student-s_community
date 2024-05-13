import React, { useState, useEffect } from "react";

const Truncated_text = ({ text, limit }) => {
  const [truncatedText, setTruncatedText] = useState("");

  useEffect(() => {
    if (text.length > limit) {
      setTruncatedText(text.substring(0, limit) + "...");
    } else {
      setTruncatedText(text);
    }
  }, [text, limit]);

  const handleclickMore = (e) => {
    setTruncatedText(text);
  };

  return (
    <p onClick={handleclickMore} style={{ cursor: "pointer" }}>
      {truncatedText}
    </p>
  );
};

export default Truncated_text;
