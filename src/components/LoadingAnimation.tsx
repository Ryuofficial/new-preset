import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div>Your download is starting{dots}</div>;
};

export default LoadingAnimation;
