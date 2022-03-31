import  "../styles/homeDropMenu.css";


function HomeDropMenu({types,handleFilter,handleSortAlph}) {
  
  
  //Funcion para tomar el valor del tipo de dieta
  function getValue(e){
    handleFilter(e.target.value);
  }


  //Funcion para el boton asc or des

  function getFilterOp(e){
    handleSortAlph(e.target.value)
  }


  return (
    <div className="dropbtn_containers">
    

    <div className="dropdown">
    <button className="dropbtn">Filter: Diet Type</button>
    <div className="dropdown-content">
    {types.map(function(diet){
      return(<button value={diet} onClick={getValue}>{diet}</button>)
        
        
    })}
    <button value="default" onClick={getValue}>All Recipes</button>
    
   
    

    </div>
    </div>

    <div className="dropdown">
    <button className="dropbtn">Filter: Alphabet Order</button>
    <div className="dropdown-content">

    <button value="asc" onClick={getFilterOp}>ascendant</button>
    <button value="des" onClick={getFilterOp}>descendant</button>
  
    </div>
    </div>


    <div className="dropdown">
    <button className="dropbtn">Filter: Puntuaction</button>
    <div className="dropdown-content">
    <a href="#">ascendant</a>
    <a href="#">descendant</a>
  
    </div>
    </div>



    
    </div>
      
  );

  
  
}


export default HomeDropMenu;


