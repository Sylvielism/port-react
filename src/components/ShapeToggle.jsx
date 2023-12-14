import React, { useState } from 'react';

const ShapeToggle = () => {
  const [isCircle, setIsCircle] = useState(false);

  const toggleShape = () => {
    setIsCircle((prevState) => !prevState);
  };

  const shapeStyle = isCircle ? 'rounded-full bg-red-500' : 'rounded-md bg-blue-500';

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`w-24 h-24 transition-all duration-500 ease-in-out ${shapeStyle}`}
      ></div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded mt-4"
        onClick={toggleShape}
      >
        Toggle Shape
      </button>
    </div>
  );
};

export default ShapeToggle;