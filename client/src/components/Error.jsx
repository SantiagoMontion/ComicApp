

import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";


function ErrorPage() {
  return (
    <>
      
        
          <Container className="margin-top-extra">

            
            <h1>Error 404</h1>
            <h2>Page not found</h2>
            <Link to="/">
             <button className="mt-4" style={{backgroundColor:"black",color:"white", border:"none",borderRadius:'8px',padding:"10px"}}>Back to home</button>
             </Link>
         
          </Container>
     

    </>
  );
}

export default ErrorPage;
