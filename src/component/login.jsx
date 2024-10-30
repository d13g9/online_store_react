import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Login({setStatus}){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
          window.dtrum.enterAction('pago');
        
        console.log(login)
        console.log(password)

        if(login === "d13g9" && password === "tesla"){
            setStatus(true);
            window.dtrum.identifyUser('d13g9');
        }
  
    };

    return(
        <div>
          <form onSubmit={handleSubmit}>
              <table>
                <tr>
                <td><label>
                  login:
                </label></td>
                <td><input type="text" onChange={(e) => setLogin(e.target.value)} placeholder="Login" /></td>
                </tr>
                <tr>
                <td><label>
                  Password:
                </label>
                </td>
                <td><input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/></td>
                </tr>
              </table>
  
              <Button type="submit">send</Button>
          </form>
        </div>
  )
    
}

export default Login;