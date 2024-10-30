import React, { useEffect, useState } from 'react';


function ListProduct(){

    const [data,setData] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    
    return (<div>
            <table>
            <tbody>
            {data.map((p => {
                return (<tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    
                </tr>)
            }))}
            </tbody>
            </table>
        </div>)

}

export default ListProduct;