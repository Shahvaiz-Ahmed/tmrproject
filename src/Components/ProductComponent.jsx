import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import product from './Static/images/product.png';
import pdf from './Static/images/pdf.png';
import './Static/css/ProductComponent.css';
// import {withRouter} from 'react-router-dom';

function createData(AvailableQuantity, LeadTimetoShip, Quantity, Price, Discount) {
  return { AvailableQuantity, LeadTimetoShip, Quantity, Price, Discount};
}

const rows = [
  createData(1, 'In-Stock', 99, 1000, 8),
  createData(31024, '1-2 Weeks', 1000, 9909, 10),
];

function createDataTable1(Quantity1, Quantity2, Price, Discount) {
  return { Quantity1, Quantity2, Price, Discount};
}

const rowsTable1 = [
  createDataTable1(0, 99, 1000, 8),
  createDataTable1(100, 1000, 9909, 10),
];

function ProductComponent(props) {

  return (
    <div className='container'>
        <div className="left">
          <img src={product} alt="product" className='pimg'/>
          <div className="sizes">
            <h3><span>CS</span>0.139 in (3.53 mm)</h3>
            <h3><span>ID</span>0.139 in (3.53 mm)</h3>
            <h3><span>OD</span>0.139 in (3.53 mm)</h3>
          </div>
          <div className="dataSheet">
            <img src={pdf} alt="pdf" />
            <a href="/"><Button variant="contained"><span>See Data Sheet</span></Button></a>
          </div>
          <div className="quantity">
          <Button variant="contained"><span>Quantity</span></Button>
          </div>
        </div>

        <div className="right">
          <h1><strong>V1020-204</strong></h1>
          <h3><strong>Color: Black</strong><span></span></h3>
          <h2><span>AS568-204 O-rings made from CP80BK21; a 80 Shore A durometer Canrez FKM GFLT. This material is Black, Clean Room Manufactured, USP VI, KTW, WRAS, Encapsulated, High Temp, and Silicone Lubricated.</span></h2>

        <div className="table1">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Qty</strong></TableCell>
            <TableCell align="right"><strong>Price</strong></TableCell>
            <TableCell align="right"><strong>Discount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTable1.map((row1) => (
            <TableRow
            key={row1.Quantity1}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span>{row1.Quantity1} - {row1.Quantity2}</span>
              </TableCell>
              <TableCell align="right"><span>${row1.Price}</span></TableCell>
              <TableCell align="right"><span>{row1.Discount}%</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>


          <div className="table">
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Available Quantity</strong></TableCell>
            <TableCell align="right"><strong>Lead Time to Ship</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.AvailableQuantity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                <span>{row.AvailableQuantity}</span>
              </TableCell>
              <TableCell align="right"><span>{row.LeadTimetoShip}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>

          <Button className='cartBtn'
  onClick={() => {
    alert('clicked');
  }}
  variant="contained"
>
  <span>Add to Cart</span>
</Button>
        </div>
    </div>
  )
}

export default ProductComponent;