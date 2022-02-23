import { useState } from 'react';
import './App.css';

function App() {
  const buttonAlert = () => {
    window.alert("Hello World")
  }

  const [name, setState] = useState('nakano');

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  const reset = () => {
    setCount(0);
    console.log(count);
  };

  const nameplus = () => {
    setState(name + "nakano");
    console.log(name);
  };

  const namereset = () => {
    setState('nakano')
    console.log(name)
  }

  return (
    <div>
      <button onClick={buttonAlert}>
        Hello World
      </button>

      <h1>Hello world</h1>
      <h2>Hello world</h2>
      <h3>Hello world</h3>
      <h4>Hello world</h4>

      <button>button</button>
      <input type="text" />
      <a href="#">a タグ</a>
      <br></br>
      <button onClick={increment}>いいね！</button>
      {count}
      <button onClick={decrement}>よくないね！</button>
      <br />
      <button onClick={reset}>リセット</button>
      <br />
      <button onClick={nameplus}>add</button>
      <br />
      <button onClick={namereset}>addreset</button>
      <br />
      {name}

    </div>
  );
}

export default App;
