import './App.css';

const buttonAlert = () => {
  window.alert("Hello World")
}

function App() {
  return (
        <button onClick={buttonAlert}>
            Hello World
        </button>
  );
}

export default App;
