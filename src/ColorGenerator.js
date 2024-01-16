import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorGenerator() {
  // State to manage the random color
  const [textColor, setTextColor] = useState(randomColor());

  // Style object to set the background color
  const blockStyle = {
    backgroundColor: textColor,
    padding: '90px',
    borderRadius: '8px',
    display: 'inline-block',
    position: 'relative', // Positioning for the child element
  };

  // Function to generate and set a new random color
  function generateRandomColor() {
    const newColor = randomColor();
    setTextColor(newColor);
  }

  return (
    <div>
      <div style={blockStyle}>
        <p
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Generated color: {textColor}
        </p>
      </div>
      <br />
      <button onClick={generateRandomColor}>Generate</button>
    </div>
  );
}
