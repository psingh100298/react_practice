import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    if(counter<20)
    {setCounter(counter + 1);}
  };

  const handleDecrease = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
};

export default App;
