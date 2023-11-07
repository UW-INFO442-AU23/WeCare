import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

// used mui library column grouping table to form catalog: https://mui.com/material-ui/react-table/

function createData(charity, focus, rating, link) {
  return { charity, focus, rating, link};
}
const columns = [
  { id: 'charity', label: 'Charities', minWidth: 200, align: 'left' },
  { id: 'focus', label: 'Focus Area', minWidth: 200, align: 'left' },
  { id: 'rating', label: 'Charity Navigator Rating', minWidth: 150, align: 'right' },
];

const rows = [
  createData('1. West Seattle Food Bank', 'Distributing food and other needs to the community.', '85/100', 'https://westseattlefoodbank.org'),
  createData('2. Frozen yoghurt', 'Providing K-12 kids healthy meals.', '85/100'),
  createData('3. Frozen yoghurt', 'Providing K-12 kids healthy meals.', '85/100')
];

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const cellStyle = {
    padding: '8px',
  };

  const linkCellStyle = {
    fontWeight: 'bold',
    color: '#191970',
    textDecoration: 'underline',
  };

  return (
    <Paper style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
  <TableRow>
    {columns.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{
          minWidth: column.minWidth,
          fontWeight: 'bold',
          fontSize: column.label === 'Charities' ? '18px' : 'inherit', 
        }}
      >
        {column.label}
      </TableCell>
    ))}
  </TableRow>
</TableHead>





          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.charity} hover role="checkbox" tabIndex={-1}>
                  <TableCell component="th" scope="row" style={cellStyle}>
                    <a href={row.link} style={linkCellStyle}>
                      {row.charity}
                    </a>
                  </TableCell>
                  <TableCell align="left" style={cellStyle}>
                    {row.focus}
                  </TableCell>
                  <TableCell align="right" style={cellStyle}>
                    {row.rating}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}