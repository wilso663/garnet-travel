import React from 'react'
import UsersList from '../components/UserList';

function Users() {
  const USERS = [
    {id: 'u1', key: 'u1', name: 'Guy Person', image: 'https://via.placeholder.com/300.png/09f/fff', numOfPlaces: 3}
  ];
  return (
    <UsersList users={USERS} />
  )
}

export default Users