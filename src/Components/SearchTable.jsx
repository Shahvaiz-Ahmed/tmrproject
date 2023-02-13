import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Static/css/SearchTable.css'

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
        <TableContainer component={Paper}>
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
                {row.partNumber}
              </TableCell>
              <TableCell align="right">{row.startingPrice}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{row.material}</TableCell>
              <TableCell align="right">{row.hardness}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.cs}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.properties}</TableCell>
              <TableCell align="right">{row.highTmp}</TableCell>
              <TableCell align="right">{row.lowTmp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default SearchTable