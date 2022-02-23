import { useState } from 'react';
import './App.css';

function App() {
  const buttonAlert = () => {
    window.alert("Hello World")
  }

  const name = 'nakano';

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

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

      <button onClick={increment}>いいね</button>
      {count}

      {name}

    </div>
  );
}

export default App;
