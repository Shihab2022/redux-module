import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
