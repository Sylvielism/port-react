import React, { useRef, useEffect } from 'react';
import { useState } from 'react';

const Outside = () => {
  const divRef = useRef();
  const [color, setColor] = useState('red');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setColor('blue');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className= {`h-24 w-24 bg-${color}-500`} ref={divRef}>
       <p>Hello</p>
    </div>
  );
};

export default Outside;