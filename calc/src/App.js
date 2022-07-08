import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {testAC} from "./redux/actions/testActions";

function App() {
  const dispatch = useDispatch();

  const isTest = useSelector(state => state.testReducer.isTest);


  const testClick = () => {
    dispatch(testAC(!isTest));
    console.log(isTest);
  }

  return (
      <button onClick={testClick}>Test</button>
  );
}

export default App;
