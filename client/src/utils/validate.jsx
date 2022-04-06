export  default function validate(input) {  //Funcion para validar y devolver el error correspondiente
    let errors = {};
  
    if (!input.title) {
      errors.title = 'Title is required';
    } 
    else if (input.title.length < 4) {
      errors.title = 'Title must have at least 4 caracters';
    }


    if (!input.resume){
      errors.resume = 'Resume is required';
    } 
    else if (input.resume.length < 10) {
      errors.resume = 'Resume is to short';
    }


    
      
    if(!parseInt(input.punctuation)){
          errors.punctuation = "Punctuation must be a number"
      }
      else if (input.punctuation.length > 2) {
        errors.punctuation = 'Punctuation must have only 2 caracters';
      }


      
    if(!parseInt(input.healty_level)){
          errors.healty_level = "Healty level must be a number"
      }
      else if (input.healty_level.length > 2) {
        errors.healty_level = 'Healty level must have only 2 caracters';
      }


      if(!input.steps){
          errors.steps = "Steps are require"
      }
      else if(input.steps.length <10){
          errors.steps = "Steps is to short"
      } 
    
    return errors;
  };