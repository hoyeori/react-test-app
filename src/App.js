import './App.css';
import React, {useState} from 'react';


const App = () => {

  const [count, setCount] = useState(0);
  const [buttonState , setButtonState] =useState(true);

  const handleClick = (sign) => {
    if(buttonState){
     setCount(prev => prev +sign);
    }
  }

  const handleOnOff = (e) => {
    setButtonState(prev => !prev);
  }

  return (
    <div className="App flex flex-col items-center justify-center ">
        <div data-testid='count' className=' mt-10 w-10 h-10 text-2xl'>{count}</div>
        <div>
          <button data-testid='minus' className={`${buttonState? "":" text-gray-200"} text-2xl w-14 h-8 bg-gray-200 m-6`} onClick={() => handleClick(-1)}>-</button>
          <button data-testid='plus' className={`${buttonState? "":"text-gray-200"} text-2xl w-14 h-8 bg-gray-200 m-6`} onClick={() => handleClick(+1)}>+</button>
        </div>
        <button data-testid='on_off'  className={`onoff bg-[skyblue] text-xl w-[65px] h-8 m-4 cursor-pointer `} onClick={()=>handleOnOff()}>on/off</button>
    </div>
  );
}

export default App