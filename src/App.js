import  {ClassCounter}  from './components/ClassCounter';
import {HookCounter} from './components/HookCounter';
import  {HookStateObject}  from './components/HookStateObject';
import  {HookStateTwo}  from './components/HookStateTwo';
import { HookStateArray } from './components/HookStateArray';

import './App.css';


function App() {
  return (
    <div className="App">
     <ClassCounter/>
     <hr/>
     <HookCounter/>
     <hr/>
     <HookStateTwo/>
     <hr/>
     <HookStateObject/>
     <hr/>
     <HookStateArray />
    </div>
  )
}

export default App;
