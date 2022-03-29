import './App.css';
import {Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route path='/home' component={Home}/>
    </div>
  )
}
export default App;