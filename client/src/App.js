import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css';
import { CrHeder, CrHome } from './components/heder/heder';
import { CrTicets } from './components/tickets/CrTik';
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <CrHeder/>
        <Routes>
        <Route path='/' element={ <CrHome/>}/>
        <Route path='/tickets' element={ <CrTicets/>}/>
         {/* <Route path='/emp' element={ <CrEmp/>}/>
         <Route path='/trains' element={ <CrTrains/>}/>
         <Route path='/infoTrains' element={ <CrInfTrains/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
