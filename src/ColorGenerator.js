import randomColor from 'randomcolor';
import { useState } from 'react';

// responsible for color generation and display.

export default function ColorGenerator() {
  // Generate a random color
  const textColor = randomColor();
  // const hexCode =

  // Style object to set the text color
  const blockStyle = {
    backgroundColor: textColor,
    padding: '90px',
    borderRadius: '8px',
    display: 'inline-block',
  };

  return <div style={blockStyle}> </div>;
}
