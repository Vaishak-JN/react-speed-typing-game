import useWordGame from './useWordGame';
import './App.css';

function App() {

  // custom hook
  const { inputRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount } = useWordGame(10)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea ref={inputRef} value={text} onChange={handleChange} disabled={!isTimeRunning} />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning} >Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
