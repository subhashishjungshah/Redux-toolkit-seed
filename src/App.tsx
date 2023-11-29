import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/counter/index";
import { RootState } from "./redux";
import "./App.css";
import Result from "./components/Result";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter Application</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          <code>Start your counting today</code>
        </p>
      </div>
      <p className="read-the-docs">
        <code>Refreshing concept of redux with Redux-toolkit</code>
      </p>

      <p className="read-the-docs">
        <code>
          <strong>Testing in another component</strong>
        </code>
      </p>

      <Result />
    </>
  );
}

export default App;
