import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(charity, focus, rating, link) {
  return { charity, focus, rating, link};
}

const rows = [
  createData('1. West Seattle Food Bank', 'Distributing food and other needs to the community.', '85/100', 'https://westseattlefoodbank.org'),
  createData('2. Frozen yoghurt', 'Providing K-12 kids healthy meals.', '85/100'),
  createData('3. Frozen yoghurt', 'Providing K-12 kids healthy meals.', '85/100')
];

const cellStyle = {
    padding: '8px'
  };

const headerCellStyle = {
    fontWeight: 'bold',
    fontSize: '18px'
}

const rowCellStyle = {
    fontWeight: 'bold'
}

const tableContainerStyle = {
    width: '80%', 
    margin: '0 auto', 
    textAlign: 'right', 
  };

  const linkCellStyle = {
    fontWeight: 'bold',
    color: '#191970',
    textDecoration: 'underline',
  };

  export default function BasicTable() {
    return (
      <div style={tableContainerStyle}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={headerCellStyle}>Charities</TableCell>
                <TableCell align="right" style={rowCellStyle}>Focus Area</TableCell>
                <TableCell align="right" style={rowCellStyle}>Charity Navigator Rating</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.charity}>
                  <TableCell component="th" scope="row" style={cellStyle}>
                  <a href={row.link} style={linkCellStyle}>{row.charity}</a>
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>{row.focus}</TableCell>
                  <TableCell align="right" style={cellStyle}>{row.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }