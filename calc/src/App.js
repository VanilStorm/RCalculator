import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import CalcContainer from "./components/calc/container/CalcContainer";

function App() {
  // const dispatch = useDispatch();

  // const isTest = useSelector(state => state.testReducer.isTest);


  // const testClick = () => {
  //   dispatch(testAC(!isTest));
  //   console.log(isTest);
  // }

  return (
      <CalcContainer/>
  );
}

export default App;
