import "./App.css";
import Board from "./components/sqaure";

function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board value={null} onClick={() => {}} />
    </>
  );
}

export default App;
