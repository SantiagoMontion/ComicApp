import  "../styles/NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../styles/img/LogoNav.png"
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {getTypes, saveNewRecipe} from "../actions/index"
import validate from "../utils/validate";
import "../styles/NewRecipe.css"
import BackBtn from "../styles/img/BackBtn.png"

function NewRecipe() {

    const types = useSelector((state)=> state.typesLoaded)  //funcion para mostrar todos los tipos de dieta
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true); //Habilitador del botón submit cuando no haya ningun error en el formulario
    useEffect(()=>{
      dispatch(getTypes())
    },[])
    

    const [input, setInput] = useState({
        title: '',
        resume: '',
        punctuation: '',
        healty_level: '',
        steps:'',
        types:[],
        image:'',
      });

    const [errors, setErrors] = useState({}); //Estado para manejar los errores

    const handleInputChange = function(e) {
        e.preventDefault()
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
    
        setInput((prevState) => {
          return { ...prevState, [e.target.name]: e.target.value.trim()};
        });
    
      }


      const handleCheckbox = (e) => {
        
        if (e.target.checked) {
          setInput((prevState) => {
            return {
              ...prevState,
              types: [...prevState.types, e.target.value],
            };
          });
        }
      };

    useEffect(()=>{ //useEffect para habilitar o deshabilitar el boton create, cuando se cumplan ciertas condiciones
      if (
        input.title.length > 3 &&
        input.title.length <= 25 &&
        input.types.length >= 1 &&
        !errors.hasOwnProperty("resume") &&
        !errors.hasOwnProperty("punctuation") &&
        !errors.hasOwnProperty("healty_level") &&
        !errors.hasOwnProperty("steps")
       ) {
        setDisabled(false);
        } else {
        setDisabled(true);
        }
      }, [errors, input, disabled]);
    
    


    const handleOnSubmit = (e) => {
      e.preventDefault();
      
      setInput((prevState) => {
        return { ...prevState, types: input.types };
      });
      
      if (input.image.length === 0){
        input.image = "https://www.recetasderechupete.com/wp-content/uploads/2021/08/Croquetas-de-brocoli-y-queso-768x530.jpg"
      }
      
    
      dispatch(saveNewRecipe(input));
        setInput({
          title: '',
          resume: '',
          punctuation: '',
          healty_level: '',
          steps:'',
          types:'',
          image:''
      });
      
      
    }
    

    return (
        <div >
            <div className="NavContain">
          
            <div className="nav_logo">
            <Link to="/home">
                <img src={Logo}></img>
            </Link>
            </div>
          </div>
          <div className="BackLogo">
                <Link to="/home">
                <img className="LogoBack" src={BackBtn}></img>
                </Link>
          </div>
          <div className='AllForm'>
          
          <form onSubmit={handleOnSubmit} className="FormContain">
          
            <h1>Create your Recipe</h1>
            <h4>Complete all the fields with your own recipe.</h4>


          <div className="AllInputs">
          <div className='InputContain'>
          <label>Title</label>
          
          <div className='Input'>
         <input className={errors.title && 'danger'} placeholder='recipe title...' type="text" name="title" onChange={handleInputChange} value={input.title} />
         <div className="danger"><label>{errors.title}</label></div>
        </div>
        </div>
        
        <div className='InputContain'>
        <label>Plate resume</label>
        
        <div className='Input'>
        <input className={errors.resume && 'danger'} placeholder='plate resume...' type="text" name="resume" onChange={handleInputChange} value={input.plate_resume} />
        <div className="danger"><label>{errors.resume}</label></div>
        </div>
        </div>
        

        <div className='InputContain'>
        <label>Plate Punctuation</label>
        
        <div className='Input'>
        <input className={errors.punctuation && 'danger'} placeholder='plate punctuation...' type="text" name="punctuation" onChange={handleInputChange} value={input.punctuation} />
        <div className="danger"><label>{errors.punctuation}</label></div>
        </div>
        </div>

        <div className='InputContain'>
        <label>Healty level</label>
        
        <div className='Input'>
        <input className={errors.healty_level && 'danger'} placeholder='recipe healty level...' type="text" name="healty_level" onChange={handleInputChange} value={input.healty_level} />
        <div className="danger"><label>{errors.healty_level}</label></div>
        </div>
        </div>

        <div className="Stepscontain">
        <div className='InputContain'>
        <label>Step by step</label>
        
        <div className='Input'>
        <input className={errors.steps && 'danger'} placeholder='recipe steps...' type="text" name="steps" onChange={handleInputChange} value={input.steps} />
        <div className="danger"><label>{errors.steps}</label></div>
        </div>
        </div>
        </div>
        <div className="typesh3">
        <h3>Select all the diets types of your recipe</h3>
        </div>
        {types?.map(t=>{
          
          return(
            <div className="types-form">
            <input className={errors.types && 'danger'} onChange={handleCheckbox} value={t} name="types" type="checkbox" ></input>
            <label>{t}</label>
          </div>
          )
        })}
        <div className="danger">{errors.types}</div>
        


        </div>
        <div className='submitContainer'>
        <div className='submit'>
        <button disabled={disabled} onClick={handleOnSubmit}>Submit Recipe</button>
        </div>
        </div>
       
      
      </form>
      </div>

    </div>
  );
}

export default NewRecipe;