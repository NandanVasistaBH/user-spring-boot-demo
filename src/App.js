import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ApiDisplay from './components/ApiDisplay';
import ClassComp from "./components/ClassComp"
import Counter from './components/Counter';
import FunTimer from './components/FunTimer';
import ToggleBtn from './components/ToggleBtn';
import Search from './components/Search';
import TodoList from './components/TodoList.jsx';
import Form from './components/Form.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './components/User.jsx';

function App() {
  return (
    <>

    <Navbar/>
    <User/>
  
    <Routes>
      <Route path="/timer" element={<FunTimer/>}/>
      <Route path="/todo" element={<TodoList/>}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/toggle" element={<ToggleBtn/>}/>
      <Route path="/namaskara" element={<ClassComp msg="ellarigu namaskara"/>}/>
      <Route path='login' element={<Form/>}/>
      <Route path='counter' element={<Counter/>}/>
      <Route path="/notfound">
        <Route path='404' element={<NotFound />}/>

      </Route>
    </Routes>
    

    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
