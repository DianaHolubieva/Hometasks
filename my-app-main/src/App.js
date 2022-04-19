import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Users from './Components/Users.jsx';
import Pagination from './Components/Pagination.jsx';

function App (){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/');
      setUsers(res.data);
      setLoading(false);
    }

    getUsers()
  }, [])

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex);


  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1 );
  const prevPage = () => setCurrentPage(prev => prev - 1 );

  return (
    <div className='container'>
      <h1 className='text'>Users</h1>
      <Users users={currentUser} loading={loading} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />


      <button className="btn" onClick={prevPage}>Prev Page</button>
      <button className="btn" onClick={nextPage}>Next Page</button>
    </div>
  )
};



export default App;
