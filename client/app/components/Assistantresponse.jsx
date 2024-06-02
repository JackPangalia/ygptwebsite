import React from 'react';

// Function to parse text and convert bold markers and bullet points to JSX elements with Tailwind CSS classes
const parseText = (text) => {
  const lines = text.split('\n');
  let parsedElements = [];
  let currentListItems = [];

  lines.forEach((line, index) => {
    // Handle bold markers
    const parts = line.split(/(\*\*.*?\*\*)/g).map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={`${index}-${idx}`} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    // Check if the line is a bullet point
    if (line.trim().startsWith('- ')) {
      const bulletText = line.trim().slice(2); // Remove the dash and space
      currentListItems.push(
        <li key={index} className="list-disc list-inside ml-4">
          {bulletText}
        </li>
      );
    } else {
      if (currentListItems.length > 0) {
        parsedElements.push(
          <ul key={`list-${index}`} className="mb-2">
            {currentListItems}
          </ul>
        );
        currentListItems = [];
      }
      parsedElements.push(
        <p key={index} className="mb-2">
          {parts}
        </p>
      );
    }
  });

  if (currentListItems.length > 0) {
    parsedElements.push(
      <ul key={`list-end`} className="mb-2">
        {currentListItems}
      </ul>
    );
  }

  return parsedElements;
};

const Assistantresponse = ({ text }) => {
  return (
    <>
      <div
        className="p-3 mx-[2rem] lg:mx-0"
        style={{ paddingInline: `calc(50vw - var(--container-width) / 2)` }}
      >
        {parseText(text)}
      </div>
    </>
  );
};

export default Assistantresponse;
