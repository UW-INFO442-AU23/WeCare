import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { auth, realtimedb } from '../f-config';
import { ref as databaseRef, set, get, remove } from 'firebase/database';
import { Header } from './Resources';


// used mui library column grouping table to form catalog: https://mui.com/material-ui/react-table/

function createData(charity, focus, rating, link, isSaved = false) {
  return { charity, focus, rating, link, isSaved };
}

const sanitizeCharityNameForFirebaseKey = (name) => {
  return name.replace(/^\d+\.\s+/, '').replace(/[.#$[\]]/g, '');
};

const columns = [
  { id: 'charity', label: 'Charities', minWidth: 200, align: 'left' },
  { id: 'focus', label: 'Focus Area', minWidth: 200, align: 'center' },
  { id: 'rating', label: 'Charity Navigator Rating', minWidth: 150, align: 'center'},
  { id: 'rating', label: 'Save/Unsave', minWidth: 150, align: 'center'}
];

const initialRows = [
  createData('1. West Seattle Food Bank', 'Distributing food and other needs to the community.', '100/100', 'https://westseattlefoodbank.org', false),
  createData('2. Washington Farmland Trust', 'Helping protect threatened land for farmers.', '91/100', 'https://wafarmlandtrust.org/'),
  createData('3. Pike Place Market Foundation', 'Providing healthy produce and foods of various cultures for the community.', '100/100', 'https://pikeplacemarketfoundation.org/get-involved/give/donate-today/', false),
  createData('4. El Centro de la Raza', 'A food bank for low-income individuals to connect with their culture through nutricious culture-rich foods.', '100/100', 'https://www.elcentrodelaraza.org/el-centro-food-bank/', false),
  createData('5. Hunger Intervention Program', 'Supporting underserved populations in North King County through healthy meals, education, and advocacy.', '85/100', 'https://hungerintervention.org/donate/', false),
  createData('6. Harvest Against Hunger', 'Connects farmers, truckers, volunteers, and communities to reduce hunger and food waste.', '100/100', 'https://www.harvestagainsthunger.org/donate/', false),
  createData('7. Northwest Harvest', 'Washingtons leading hunger relief agency, distributing food across the state.', '99/100', 'https://www.northwestharvest.org/ways-to-give/', false),
  createData('8. Seattle Food Banks', 'Advocates for food equity and justice, providing food and services that support self-sufficiency.', '100/100', 'https://www.seattlefoodcommittee.org/donate/', false),
  createData('9. Feeding America', 'The largest charity working to end hunger in the U.S. through programs and food banks.', '97/100', 'https://www.feedingamerica.org/', false),
  createData('10. United Way of King County', 'Providing access to resources, education, and meals.', '98/100', 'https://www.uwkc.org/donate/', false),
  createData('11. Food Lifeline', 'A member of Feeding America, providing food, meal programs, and shelters across Western Washington.', '91/100', 'https://foodlifeline.org/', false),
  createData('12. Emergency Food Network', 'Providing Pierce County with a consistent, diverse and nutritious food supply.', '99/100', 'https://www.efoodnet.org/', false),
  createData('13. Packs for Kids ', 'Providing healthy packs of food and backpacks for kids, focused in Mukilteo County.', 'Not yet rated', 'https://www.udistrictfoodbank.org/services/packs-for-kids/', false),
  createData('14. Weekend Food for Kids', 'Providing students with nutritious and easy-to-prepare meals for the weekends', '100/100', 'https://www.ballardfoodbank.org/weekend-food-for-kids', false),
  createData('15. Farestart Seattle', 'Providing healthy meals for schools, healthcare centers, shelters, and more.', '100/100', 'https://www.farestart.org/feeding-our-community', false),
  createData('16. City Fruit', 'Harvesting fruit across Seattle and distributing to the community.', '77/100', 'https://www.cityfruit.org/', false),
  createData('17. Sustainable Seattle', 'Equitable access to health, food, shelter, and economic wealth for all.', '82/100', 'https://sustainableseattle.org/', false),
  createData('18. Spokane Valley Partners', 'Providing emergencies and temporary food needs through various services.', '100/100', 'https://www.volunteerspokane.org/agency/detail/?agency_id=120877', false),
  createData('19. Second Harvest Inland Northwest', 'Provide food through mobile markets, education, hunger relief network, and feeding kids programs.', '99/100', 'https://2-harvest.org/', false),
  createData('20. FamilyWorks', 'Providing food services and family centers for the community.', '98/100', 'https://familyworksseattle.org/', false),
  createData('21. Healthy Food America', 'Make food healthier: expose the community less to unhealthy junk foods.', '97/100', 'https://www.healthyfoodamerica.org/', false),
  createData('22. Backpack Brigade', 'Providing weekend meal packs to school kids in need.', 'Not yet rated', 'https://www.backpackbrigade.org/', false),
  createData('23. North Helpline', 'Partnering with various food banks and services to provide services like bi-weekly meal home deliveries.', '100/100', 'https://northhelpline.org/', false)
];


export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(initialRows);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const savedCharitiesRef = databaseRef(realtimedb, `users/${user.uid}/savedCharities`);
        get(savedCharitiesRef).then((snapshot) => {
          const savedCharitiesData = snapshot.val() || {};

          const updatedRows = initialRows.map(row => {
            const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(row.charity);
            return { ...row, isSaved: savedCharitiesData.hasOwnProperty(sanitizedCharityName) };
          });

          setRows(updatedRows);
          setIsLoading(false);
        }).catch(error => {
          console.error('Error fetching saved charities:', error);
          setIsLoading(false);
        });
      } else {
        console.log('No user logged in');
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSave = (charity) => {
    if (!auth.currentUser) {
      setShowModal(true);
      return;
    }
    console.log('Attempting to save:', charity);
    const userId = auth.currentUser.uid;
    const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(charity.charity);
    const charityRef = databaseRef(realtimedb, `users/${userId}/savedCharities/${sanitizedCharityName}`);

    set(charityRef, { ...charity, isSaved: true });

    const updatedRows = rows.map(row => row.charity === charity.charity ? { ...row, isSaved: true } : row);
    setRows(updatedRows);
  };

  const handleUnsave = (charity) => {
    console.log('Attempting to unsave:', charity);
    const userId = auth.currentUser.uid;
    const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(charity.charity);
    const charityRef = databaseRef(realtimedb, `users/${userId}/savedCharities/${sanitizedCharityName}`);

    remove(charityRef);

    // Update UI immediately for better user experience
    const updatedRows = rows.map(row => row.charity === charity.charity ? { ...row, isSaved: false } : row);
    setRows(updatedRows);
  };

  const handleCloseModal = () => setShowModal(false);

  const cellStyle = {
    padding: '8px',
  };

  const linkCellStyle = {
    fontWeight: 'bold',
    color: '#191970',
    textDecoration: 'underline',
  };

  return (
    <>
    {Header('Charities Catalog')}
    <Paper style={{ width: '80%', margin: '0 auto', textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
      {/* <h1 style={{ fontSize: '30px', textAlign: 'center', fontStyle: 'bold', textDecoration: 'underline' }}>Charities Catalog</h1> */}
      {isLoading ? (
        <div style={{ textAlign: 'center', margin: '20px' }}>Loading...</div>  // Loading indicator
      ) : (
        <>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: 'bold', fontSize: column.label === 'Charities' ? '18px' : 'inherit' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                      <TableCell component="th" scope="row">
                        <a href={row.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', color: '#191970', textDecoration: 'underline' }}>
                          {row.charity}
                        </a>
                      </TableCell>
                      <TableCell align="center">{row.focus}</TableCell>
                      <TableCell align="center">{row.rating}</TableCell>
                      <TableCell align="center">
                        {row.isSaved ? (
                          <button className="btn btn-outline-secondary" onClick={() => handleUnsave(row)}>Unsave</button>
                        ) : (
                          <button className="btn btn-outline-primary" onClick={() => handleSave(row)}>Save</button>
                        )}
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
        </>
      )}
    </Paper>
    <div className={`modal fade ${showModal ? 'show' : ''}`}
           id="loginModal"
           tabIndex="-1"
           aria-labelledby="loginModalLabel"
           aria-hidden="true"
           style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login Required</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Log in to save charities.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}