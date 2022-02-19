import './App.css';

function App() {
  const buttonAlert = () => {
    window.alert("Hello World")
  }
  return (
        <button onClick={buttonAlert}>
            Hello World
        </button>
  );
}

export default App;
