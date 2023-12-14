import React, { useState,useEffect } from 'react';

const ImageBrightness = () => {
  const [brightness, setBrightness] = useState([50, 50, 50, 50,]); // Initial brightness values
  const [value, setValue] = useState([0]);
  const [text, setText] = useState("");
  const [head, setHead] = useState("");
  var [div,setDiv] = useState ("");

  const handleHover = (index) => {
    const updatedBrightness = brightness.map(( _ , i) => (i <= index ? 100 : 50));
    setBrightness(updatedBrightness);
    if (index == 3){
      setValue([80])
      setText("FullBody commision with full customization work duration 5-8 days")
      setHead("FullBody")
    }else if (index == 2){
      setValue([65])
      setText("Head-tight commision with full customization work duration 5-8 days")
      setHead("Head-tight")
    }else if (index == 1){
      setValue([45])
      setText("Bustshots commision with full customization work duration 5-8 days")
      setHead("Bustshots")
    }else{
      setValue([20])
      setText("Headshots commision with full customization work duration 5-8 days")
      setHead("Headshots")
    }

    
  };

  useEffect(() => {
    if (brightness.includes(100)){
      console.log('true')
      setDiv('visible')
      console.log(div)
    }else{
      setDiv('collapse')
    }
  })

  //if 
  //  console.log('true')
  //  useEffect(()=>{setDiv('visible');}, [])
  //}else{
  //  console.log('flase')
  //  setDiv('collapse')
  //}

  const handleMouseLeave = () => {
    //setBrightness([50, 50, 50, 50]); // Reset all brightness values
    //setText("")
    //setHead("")

  };

  return (
    <div className="w-full bg-neutral-900 ">
      <div className='grid grid-cols-2 max-w-[1000px] m-auto'>
        <div className="max-w-[1000px] m-auto items flex items-center flex-col p-4 z-10">
          <div
            className="square w-80 h-40 rounded-t-lg"
            style={{ filter: `brightness(${brightness[0]}%)`, backgroundColor: 'transparent' }}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleMouseLeave}
          ><img className='w-full' src="./Head" alt="" /></div>
          <div
            className="square w-80 h-40"
            style={{ filter: `brightness(${brightness[1]}%)`, backgroundColor: 'transparent' }}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleMouseLeave}
          ><img className='w-full' src="./bust.png" alt="" /></div>
          <div
            className="square w-80 h-40"
            style={{ filter: `brightness(${brightness[2]}%)`, backgroundColor: 'transparent' }}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleMouseLeave}
          ><img className='w-full' src="./thigh.png" alt="" /></div>
          <div
            className="square w-80 h-40 rounded-b-lg"
            style={{ filter: `brightness(${brightness[3]}%)`, backgroundColor: 'transparent' }}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleMouseLeave}
          ><img className='w-full' src="./full.png" alt="" /></div> 
        </div>
        <div>
              <table class="border-collapse border border-slate-500 m-auto pt-4">
              <caption class="caption-top text-white py-2">
                Commission Pricing
              </caption>
                <thead>
                  <tr>
                    <th class="border border-white text-white px-16 py-3">Scale</th>
                    <th class="border border-white text-white px-16 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">Headshots</td>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">20 $</td>
                  </tr>
                  <tr>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">Bustshots</td>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">45 $</td>
                  </tr>
                  <tr>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">Head-tight</td>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">65 $</td>
                  </tr>
                  <tr>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">Fullbody</td>
                    <td class="border border-white text-white px-16 py-3 bg-neutral-800">80 $</td>
                  </tr>
                </tbody>
              </table>
              <div className={`bg-neutral-800 mt-4 p-2 rounded-lg ${div}`}>
                <h1 className='text-white text-xl '>{head}</h1>
                <div className='text-white pt-2'> &emsp; {text}</div>
                <h1 className='pt-2 text-white'>Total {value} $ </h1>
              </div>
              
              
        </div>
      </div>
    </div>
  );
};

export default ImageBrightness;