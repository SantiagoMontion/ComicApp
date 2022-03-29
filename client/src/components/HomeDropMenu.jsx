
import  "../styles/homeDropMenu.css";


function HomeDropMenu() {
 
  return (
    <div className="dropbtn_containers">
    

    <div className="dropdown">
    <button className="dropbtn">Filter: Diet Type</button>
    <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
    </div>

    <div className="dropdown">
    <button className="dropbtn">Filter: Alphabet Order</button>
    <div className="dropdown-content">
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
    <a href="#">Link 6</a>
    </div>
    </div>


    <div className="dropdown">
    <button className="dropbtn">Filter: Puntuaction</button>
    <div className="dropdown-content">
    <a href="#">Link 7</a>
    <a href="#">Link 8</a>
    <a href="#">Link 9</a>
    </div>
    </div>



    
    </div>
      
  );
}


export default HomeDropMenu;


