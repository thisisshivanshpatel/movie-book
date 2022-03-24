import { useState } from "react";
import "./App.css";

//custom component
const Person = (props) => {
  return (
    <>
      <h1>Name:-{props.name}</h1>
      <h2>Age:-{props.age}</h2>
      <h2>Profession:-{props.profession}</h2>
    </>
  );
};

//Counter

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </>
  );
};

//watch

const Watch = () => {
  const [time, setTime] = useState(0);

  const timeSetter = () => {
    const date = new Date();
    const Hours = date.getHours();
    const Minute = date.getMinutes();
    const Second = date.getSeconds();

    let exactTime = `${Hours}:${Minute}:${Second}`;

    setTime(exactTime);
  };

  setInterval(() => {
    timeSetter();
  }, 1000);

  return (
    <>
      <div align="center">
        <h1>IST {time}</h1>
      </div>
    </>
  );
};

const App = () => {
  const isNameShowing = true;
  const name = "shivansh";

  return (
    <div className="App">
      <h1 className="inpS">Hello {isNameShowing ? name : "MR.PROGRAMMER"}</h1>
      {isNameShowing ? (
        <>
          <Person name={name} age={22} profession={"Software Engineer"} />
        </>
      ) : (
        <>
          {/* <Counter /> */}
          <Watch />
        </>
      )}
    </div>
  );
};

export default App;
