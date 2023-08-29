// import logo from './logo.svg';
import './App.css';
// import ClassCompo1 from './Compo/ClassCompo1';
// import FunctionCompo1 from './Compo/FunctonCompo1';
import DisplayData1, { DisplayDataClass1 } from './Compo/DisplayData1';


function App() {

  return (
    <div className="App">
      {/* <ClassCompo1/>
      <FunctionCompo1/> */}
      <h1 className='head'>Styling using Functional and Class Component</h1>
      <DisplayData1 />
      <DisplayDataClass1 />
  
    </div>
  );
}

export default App