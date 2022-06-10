import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(arrayData) {
  return { price: arrayData[0], roomName: arrayData[1], name: arrayData[2], address: arrayData[3], cardNumber: arrayData[4], from: arrayData[5], to: arrayData[6] };
}
const data = JSON.parse(localStorage.getItem("booked"))?.map(item => Object.values(item))

const rows = []
data?.reverse()?.map(row => rows.push(createData(row)))

export default function Profile() {
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 200, marginBottom: 200, maxWidth: 1200, margin: 'auto' }}>
        <button style={{ marginBottom: 20 }} className='primary-btn'>Clear all my booked</button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Name customer</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Date begin</TableCell>
              <TableCell align="center">Date end</TableCell>
              <TableCell align="center">Card number</TableCell>
              <TableCell align="center">Room name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.price}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.price}
                </TableCell>
                <TableCell align="center">{row?.name}</TableCell>
                <TableCell align="center">{row?.address}</TableCell>
                <TableCell align="center">{row?.from || "-"}</TableCell>
                <TableCell align="center">{row?.to || "-"}</TableCell>
                <TableCell align="center">{row?.cardNumber}</TableCell>
                <TableCell align="center">{row?.roomName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}