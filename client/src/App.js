import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ComicDetail from "./components/ComicDetail";
import Favorites from "./components/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/Error"


function App() {
  

  
  return (
    <div className="App">
      
      <Route exact path="/" component={Home} />
      <Route exact path="/comics/:id" component={ComicDetail} />
      {/* <Route exact path="*" component={ErrorPage} /> */}
    </div>
  );
}
export default App;
