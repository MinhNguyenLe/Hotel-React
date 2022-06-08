import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(arrayData) {
  return { name: arrayData[0], calories: arrayData[1], fat: arrayData[2], carbs: arrayData[3], protein: arrayData[4] };
}
const a = JSON.parse(localStorage.getItem("booked"))?.map(item => Object.values(item))
console.log(a, JSON.parse(localStorage.getItem("booked")))

const rows = []
a.reverse().map(row => rows.push(createData(row)))

export default function Profile() {
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 200, marginBottom: 200, maxWidth: 1200, margin: 'auto' }}>
        <button style={{ marginBottom: 20 }} className='primary-btn'>Clear all my booked</button>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Name customer</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Card number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
