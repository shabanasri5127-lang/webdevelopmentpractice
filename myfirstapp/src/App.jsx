import "./App.css";

function App() {

  function greet() {
    alert("Hello Everyone!");
  }

  return (
    <div className="container">
      <h1>React Application</h1>
      <h2>My Name is: Shabana Sri</h2>
      <p>Welcome to my first React application.</p>

      <button onClick={greet}>Click Me</button>

      <br /><br />

      <input type="text" placeholder="Enter your name" />
    </div>
  );
}

export default App;