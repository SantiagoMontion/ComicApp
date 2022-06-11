import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ComicDetail from "./components/ComicDetail";
import Favorites from "./components/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  

  
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/comics/:id" component={ComicDetail} />
    </div>
  );
}
export default App;
