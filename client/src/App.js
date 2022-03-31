import './App.css';
import {Route } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainPage} />
      <Route path='/' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route exact path='/recipes/:id' component={RecipeDetail}/>
      {/* <Route exact path='/recipes/:name' component={RecipeDetail}/> */}
    </div>
  )
}
export default App;