import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';




function LastSales(){


    return(
        <Container>
             <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Id Sales</th>
                <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>456</td>
                <td>Mark</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                </tr>
            </tbody>
            </Table>
        </Container>
    );
}

export default LastSales;