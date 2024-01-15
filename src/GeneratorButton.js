import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function GeneratorButton() {
  const [random, setRandom] = useState(randomColor());

  //   return <button onClick={() => setRandom(randomColor())}>Generate</button>;
  // }
  const handleClick = () => {
    const newRandomColor = randomColor();
    console.log('New Random Color:', newRandomColor);
    setRandom(newRandomColor);
  };

  return <button onClick={handleClick}>Generate</button>;
}
