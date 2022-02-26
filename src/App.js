import { useState } from 'react';
import './App.css';
import Card from './Card';

const sampleArray = [
  'aaa', 'bbb', 'ccc', 'ddd', 'eee'
]

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

  const sampleArray = [
    { id: 1, name: 'aaa', date: 19920527 },
    { id: 2, name: 'bbb', date: 19920528 },
    { id: 3, name: 'ccc', date: 19920529 },
    { id: 4, name: 'ddd', date: 19920531 },
    { id: 5, name: 'eee', date: 19920501 }
  ];

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th align='left'>id</th>
              <th align='left'>name</th>
              <th align='left'>date</th>
            </tr>
          </thead>

          {sampleArray.map((data, index) => {
            console.log(index)
            return (
              <tbody key={(index)}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                </tr>
              </tbody>

            )
          })}
        </table>
      </div>
      <div>
        {sampleArray.map((data, index) => {
          console.log(index)
          return <Card id={data.id} name={data.name} date={data.date} key={index} />;
        })}

        <Card name="nakano" date="2022/02/26" />
      </div>



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
    </div >
  );
}

export default App;
