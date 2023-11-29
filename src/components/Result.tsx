import { useSelector } from "react-redux";
import { RootState } from "../redux";

const Result = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>{count}</div>;
};

export default Result;
