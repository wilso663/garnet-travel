import React from 'react'
import UserItem from './UserItem';
import './UserList.css';

interface IUser {
  key: string;
  id: string;
  name: string;
  image: string;
  places: number;
}

interface PropsType<T> {
  items: T[];
}

function UserList<T extends IUser>(props: PropsType<T>){
  if(props.items.length === 0){
    return (
      <div>No users created yet.</div>
    );
  } else {
    return (
      <ul className="users-list">
        { props.items.map(user => {
            return <UserItem 
                      key={user.id} 
                      id={user.id} 
                      image={user.image} 
                      name={user.name} 
                      places={user.places}
                    />
          })
        }
      </ul>
    )
  }
};

export default UserList