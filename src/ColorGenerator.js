import randomColor from 'randomcolor';
import { useState } from 'react';
import GeneratorButton from './GeneratorButton';

export default function ColorGenerator() {
  // State to manage the random color
  const [textColor, setTextColor] = useState(randomColor());

  // Style object to set the background color
  const blockStyle = {
    backgroundColor: textColor,
    padding: '90px',
    borderRadius: '8px',
    display: 'inline-block',
  };

  // Function to generate and set a new random color
  const generateRandomColor = () => {
    const newColor = randomColor();
    setTextColor(newColor);
  };

  return (
    <div>
      <div style={blockStyle}></div>
      <button onClick={generateRandomColor}>Generate</button>
      <p>hex code?</p>
    </div>
  );
}

// put button under colorblock
// generate hex code inside color block
