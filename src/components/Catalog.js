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
  return { charity, focus, rating, link };
}
const columns = [
  { id: 'charity', label: 'Charities', minWidth: 200, align: 'left' },
  { id: 'focus', label: 'Focus Area', minWidth: 200, align: 'center' },
  { id: 'rating', label: 'Charity Navigator Rating', minWidth: 150, align: 'center'},
];

const rows = [
  createData('1. West Seattle Food Bank', 'Distributing food and other needs to the community.', '100/100', 'https://westseattlefoodbank.org'),
  createData('2. Washington Farmland Trust', 'Helping protect threatened land for farmers.', '91/100', 'https://wafarmlandtrust.org/'),
  createData('3. Pike Place Market Foundation', 'Providing healthy produce and foods of various cultures for the community.', '100/100', 'https://pikeplacemarketfoundation.org/get-involved/give/donate-today/'),
  createData('4. El Centro de la Raza', 'A food bank for low-income individuals to connect with their culture through nutricious culture-rich foods.', '100/100', 'https://www.elcentrodelaraza.org/el-centro-food-bank/'),
  createData('5. Hunger Intervention Program', 'Supporting underserved populations in North King County through healthy meals, education, and advocacy.', '85/100', 'https://hungerintervention.org/donate/'),
  createData('6. Harvest Against Hunger', 'Connects farmers, truckers, volunteers, and communities to reduce hunger and food waste.', '100/100', 'https://www.harvestagainsthunger.org/donate/'),
  createData('7. Northwest Harvest', 'Washingtons leading hunger relief agency, distributing food across the state.', '99/100', 'https://www.northwestharvest.org/ways-to-give/'),
  createData('8. Seattle Food Banks', 'Advocates for food equity and justice, providing food and services that support self-sufficiency.', '100/100', 'https://www.seattlefoodcommittee.org/donate/'),
  createData('9. Feeding America', 'The largest charity working to end hunger in the U.S. through programs and food banks.', '97/100', 'hhttps://www.feedingamerica.org/'),
  createData('10. United Way of King County', 'Providing access to resources, education, and meals.', '98/100', 'https://www.uwkc.org/donate/'),
  createData('11. Food Lifeline', 'A member of Feeding America, providing food, meal programs, and shelters across Western Washington.', '91/100', 'https://foodlifeline.org/'),
  createData('12. Emergency Food Network', 'Providing Pierce County with a consistent, diverse and nutritious food supply.', '99/100', 'https://www.efoodnet.org/'),
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
    <Paper style={{ width: '80%', margin: '0 auto', textAlign: 'center', marginBottom: '20px', marginTop: '20px'}}> 
    <h1 style={{ fontSize: '30px',textAlign: 'center', fontStyle: 'bold', textDecoration: 'underline' }}> Charities Catalog</h1> 
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
                  <TableCell align="center" style={cellStyle}>
                    {row.focus}
                  </TableCell>
                  <TableCell align="center" style={cellStyle}>
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