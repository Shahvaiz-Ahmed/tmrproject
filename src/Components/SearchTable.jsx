import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Static/css/SearchTable.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function SearchTable({ searchTerm, setitemno, setarray }) {
  console.log(searchTerm);
  const [arr, setarr] = useState([]);
  const username = 'MUHAMMAD ALI';
  const password = 'ZjpHC2TE16qjPqo6iUraaJrIg2gps4xHSdTmA9FVNd8=';
  useEffect(() => {

    return () => {
      axios.get('https://api.businesscentral.dynamics.com/v2.0/0cd74c11-7d97-4748-a720-ebbd5100b4e9/Sandbox1/api/TMRC/TMRC_Group/v2.0/companies(b290c1c3-11ab-ec11-bb8f-000d3a398a56)/ItemRelative', {
        auth: {
          username,
          password
        }
      }).then(res => setarr(res.data.value))

    }
  }, [])
  const filteredData = arr.filter(arr =>
    arr.Category.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='searchTable'>
     
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Part Number</strong></TableCell>
              <TableCell align="right"><strong>Description</strong></TableCell>
              <TableCell align="right"><strong>Category</strong></TableCell>
              <TableCell align="right"><strong>UOFM</strong></TableCell>
              <TableCell align="right"><strong>Price</strong></TableCell>
              <TableCell align="right"><strong>Inventory</strong></TableCell>
              <TableCell align="right"><strong>QtyPurchOrder</strong></TableCell>
              <TableCell align="right"><strong>Variant</strong></TableCell>
              <TableCell align="right"><strong>Picture</strong></TableCell>

            </TableRow>
          </TableHead>
          {searchTerm===""?<></>:
          <TableBody>
            {filteredData.map((filteredData) => (
              <TableRow
                key={filteredData.partNumber}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="arr">

                <Link onClick={()=>{setarray(arr);setitemno(filteredData.ItemNo)}} to={`/product/${filteredData.ItemNo}`}><span>{filteredData.ItemNo}</span></Link>
                </TableCell>
                <TableCell align="right"><span>{filteredData.Description}</span></TableCell>
                <TableCell align="right"><span>{filteredData.Category}</span></TableCell>
                <TableCell align="right"><span>{filteredData.UOFM}</span></TableCell>
                <TableCell align="right"><span>{filteredData.UnitPrice}</span></TableCell>
                <TableCell align="right"><span>{filteredData.Inventory}</span></TableCell>
                <TableCell align="right"><span>{filteredData.QtyPurchOrder}</span></TableCell>
                <TableCell align="right"><span>{filteredData.Variant}</span></TableCell>
                <TableCell align="right"><span><img src="{filteredData.Picture}" alt="" /></span></TableCell>
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