import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./action";
import "./styles.css";

const App = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decerement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default App;
