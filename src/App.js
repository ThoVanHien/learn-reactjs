import "./App.css";
import ColorBox from "./components/ColorBox";
import Counter from "./components/Counter";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <TodoFeature/>
      {/* <ColorBox />
      <Counter/> */}
    </div>
  );
}

export default App;
