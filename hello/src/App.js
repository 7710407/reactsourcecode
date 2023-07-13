import "./App.css";
import React, {useState} from "react";

function App() {
  // let likes = 0;
  const [state, setLikes] = useState(1);
  const [date, setDate] = useState('1970-01-01')
  const [color, setColor] = useState("red")


  function changeDate(evt) {
    setDate(evt.target.value)
  }

  function changeColor(evt) {
    setColor(evt.target.value)
    document.body.style.backgroundColor = evt.target.value
  }

  // function increment() {
  //   setState(state * 2)
  // }

  // function decrement() {
  //   setState(state - 1)
  // }

  return (
    <div className="App">
      {/* <>Hello world</>
      <button onClick={() => console.log('click')}> Click me</button> */}
      {/* <h1>{state}</h1> */}
      <h3>{date}</h3>
      <input type="date" value={date} onChange={changeDate}></input>
      {/* <button onClick={() => setLikes(state + 1)}>Increment</button>
      <button onClick={() => setLikes(state - 1)}>Decrement</button> */}
      <input type="color" value={color} onChange={changeColor}></input>
    </div>

    // React.createElement("div", null, "1111111111",
    // React.createElement("button", {onClick: () => console.log('OK')}, 'Button 2'))
  );
}

export default App;
