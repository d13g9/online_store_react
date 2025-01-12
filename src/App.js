import logo from './logo.svg';
import './App.css';
import NavbarComponent from './component/NavbarComponent';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import LastSales from './component/LastSales';
import { Component, useState, useEffect  } from 'react';
import AddProduct from './component/AddProduct';
import ListProduct from './component/ListProduct';
import Login from './component/login';

function App() {
	
    const [component,setComponent] = useState(0);
    const [status,setStatus] = useState(false)


    function switchComponent(){

      if (status){
        switch(component){
          case 1:
              return <AddProduct/>
            case 2:
              return <ListProduct/>
          default: 
            return <LastSales/>
          
        }
    }else{
      return <Login setStatus={setStatus}/>
    }
  }

  return (
    <>
    <header>
    <NavbarComponent changeComponent={setComponent}/>
      </header>
    <Container>
        {switchComponent()}         
    </Container>
    </>
  );
}

export default App;
