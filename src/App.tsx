import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { formatUserName } from './utils';
import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlace';

interface IUser {
  id: string;
  name: string;
  username: string;
}

function App() {

  const [users, setUsers] = useState<Array<IUser>>([]);

  // useEffect(() => {
  //   let mounted = true;

  //   const getUsers = async () => {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     if(mounted) {
  //       setUsers(response.data);
  //     }
  //   };

  //   getUsers();

  //   return () => { mounted = false; }
  // }, []);

  return (
    <Router>
      <div className="App">
        <div>Users:</div>
        {users.length ? (
          <ul data-testid="user-list">
            {users.map(user => (
              <li key={user.id} className="user" data-testid="user-item">
                <span>{user.name}</span> (<span>{formatUserName(user.username)}</span>)
              </li>
            ))}
          </ul>
        ) : (
          <div>Loading users...</div>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/places/new" element={<NewPlaces/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
