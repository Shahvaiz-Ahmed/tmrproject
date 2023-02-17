import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Static/css/SearchTable.css';
import {  Link } from 'react-router-dom';

function createData(partNumber, startingPrice, stock, material, hardness, type, size, cs, id, properties, highTmp, lowTmp) {
    return { partNumber, startingPrice, stock, material, hardness, type, size, cs, id, properties, highTmp, lowTmp};
  }
  
  const rows = [
      createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
      createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
      createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
      createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
  ];

function SearchTable() {
  return (
    <div className='searchTable'>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Part Number</strong></TableCell>
            <TableCell align="right"><strong>Starting Price</strong></TableCell>
            <TableCell align="right"><strong>Stock</strong></TableCell>
            <TableCell align="right"><strong>Material</strong></TableCell>
            <TableCell align="right"><strong>Color</strong></TableCell>
            <TableCell align="right"><strong>Hardness (Shore) </strong></TableCell>
            <TableCell align="right"><strong>Type</strong></TableCell>
            <TableCell align="right"><strong>Size</strong></TableCell>
            <TableCell align="right"><strong>CS (mm)</strong></TableCell>
            <TableCell align="right"><strong>ID (mm)</strong></TableCell>
            <TableCell align="right"><strong>Properties</strong></TableCell>
            <TableCell align="right"><strong>High Temprature (&#8451;)</strong></TableCell>
            <TableCell align="right"><strong>Low Temprature (&#8451;)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.partNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to="/product"><span>{row.partNumber}</span></Link>
              </TableCell>
              <TableCell align="right"><span>{row.startingPrice}</span></TableCell>
              <TableCell align="right"><span>{row.stock}</span></TableCell>
              <TableCell align="right"><span>{row.material}</span></TableCell>
              <TableCell align="right"><span>{row.hardness}</span></TableCell>
              <TableCell align="right"><span>{row.type}</span></TableCell>
              <TableCell align="right"><span>{row.size}</span></TableCell>
              <TableCell align="right"><span>{row.cs}</span></TableCell>
              <TableCell align="right"><span>{row.id}</span></TableCell>
              <TableCell align="right"><span>{row.properties}</span></TableCell>
              <TableCell align="right"><span>{row.highTmp}</span></TableCell>
              <TableCell align="right"><span>{row.lowTmp}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default SearchTable