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

// function createData(partNumber, startingPrice, stock, material, hardness, type, size, cs, id, properties, highTmp, lowTmp) {
//     return { partNumber, startingPrice, stock, material, hardness, type, size, cs, id, properties, highTmp, lowTmp};
//   }
  
//   const rows = [
//       createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
//       createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
//       createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
//       createData('CP80BK21-OR-204', 10.00, 'IN STOCK', 'FKM', 'Black', 80, 'O-Ring', 'AS568-204', 3.53, 9.12, 'GFLT, Clean Room Mfg, USP VI, KTW, WRAS, Encap, HT, Silicone Lubricated', 200, 10),
//   ];

function SearchTable(props) {
  return (
    <div className='searchTable'>
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: "60vw" }} aria-label="simple table">
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
        {
          props.searchValue===''? <></>:<TableBody>
          {props.itemData.filter((row)=>{
            return props.searchValue.toLowerCase() === ''? row:row.ItemNo.toLowerCase().includes(props.searchValue)
          }).map((row) => (
            <TableRow
              key={row.ItemNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <span><Link to={"/Product/" + row.ItemNo }>{row.ItemNo}</Link></span>
              </TableCell>
              <TableCell align="right"><span>{row.UnitPrice}</span></TableCell>
              <TableCell align="right"><span>{row.Inventory}</span></TableCell>
              <TableCell align="right"><span>{row.UOFM}</span></TableCell>
              <TableCell align="right"><span>{row.QtyPurchOrder}</span></TableCell>
              <TableCell align="right"><span>{row.Category}</span></TableCell>
              <TableCell align="right"><span>{row.size}</span></TableCell>
              <TableCell align="right"><span>{row.cs}</span></TableCell>
              <TableCell align="right"><span>{row.id}</span></TableCell>
              <TableCell align="right"><span>{row.Description}</span></TableCell>
              <TableCell align="right"><span>{row.Variant}</span></TableCell>
              <TableCell align="right"><span>{row.lowTmp}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
        }
      </Table>
    </TableContainer>
    </div>
  )
}

export default SearchTable