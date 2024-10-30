import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";



function AddProduct(){


    const [name, setProductname] = useState();
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0.00);

    const getJsonData = () => {
        return {
            "name": name,
            "price": price,
            "quantity": quantity
        }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
	    window.dtrum.enterAction('Click add Product');
      
      console.log(`Product Name: ${name}`);
      console.log(`Product quantity: ${quantity}`);
      console.log(`Product price: ${price}`);

      console.log(getJsonData());

      axios.post('https://localhost:7007/api/Product/',{
        body:JSON.stringify(getJsonData()),
      },{
        headers: {"Content-Type":"application/json"},
      })
      .then(response => {response.json()
	        window.dtrum.leaveAction('Click add Product');
	  })
      .then(data => { 
		console.log(data);
		window.dtrum.leaveAction('Click add Product');
	  }).then(error => {
        console.log(error)
    });

      
    }

    return(
          <div>
            <form onSubmit={handleSubmit}>
                <table>
                  <tr>
                  <td><label>
                    Product Name:
                  </label></td>
                  <td><input type="text" onChange={(e) => setProductname(e.target.value)} placeholder="Product Name" /></td>
                  </tr>
                  <tr>
                  <td><label>
                    Product Quantity:
                  </label>
                  </td>
                  <td><input type="text" onChange={(e) => setQuantity(e.target.value)} placeholder="Product quantity"/></td>
                  </tr>
                  <tr>
                    <td><label>
                    Product Price:
                  </label>
                  </td>
                  <td><input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="0.00"/></td>
                  </tr>
                </table>
	
                <Button type="submit">send</Button>
            </form>
          </div>
    )

}

export default AddProduct;