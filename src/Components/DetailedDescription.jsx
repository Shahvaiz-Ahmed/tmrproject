import './Static/css/DetailedDescription.css';
import product from './Static/images/product.png';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import pdf from './Static/images/pdf.png';


function createData(technicalSpecification, value) {
  return { technicalSpecification, value };
}

const rows = [
  createData('Compound Number', 34),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

function DetailedDescription() {
  return (
    <div className="desccontainer">
      <h1><strong>Detailed Description</strong></h1>
      <div className="containerBody">
        <div className="descleft">
          <h3><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus mollitia vero magnam voluptas eaque accusamus laborum rem, labore distinctio natus perferendis, tempore dignissimos quod vitae cumque unde consequuntur neque! Ipsum, porro iste! A, repellat.</span></h3>
          <div className="detailTable">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Technical Specification</strong></TableCell>
                    <TableCell align="right"><strong>Value</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.technicalSpecification}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <span>{row.technicalSpecification}</span>
                      </TableCell>
                      <TableCell align="right"><span>{row.value}</span></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="descright">
          <div className="descdataSheet">
            <img src={pdf} alt="pdf" />
            <a href="/"><Button variant="contained"><span>See Data Sheet</span></Button></a>
          </div>
          <div className="image">
            <img src={product} alt="product" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedDescription