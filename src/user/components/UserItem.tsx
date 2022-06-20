import React from 'react'
import { User } from '../models/user';
import Avatar from '../../shared/components/UIElements/Avatar';
import './UserItem.css';

export interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user}) => {
  return (
    <li data-test={`user-item-${user.id}`} className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={user.image} alt={user.name} />
        </div>
        <div className="user-item__info">
          <h2>{user.name}</h2>
          <h3> {user.numOfPlaces} {user.numOfPlaces === 1 ? 'Place' : 'Places'} </h3>
        </div>
      </div>
    </li>
  )
}

export default UserItem