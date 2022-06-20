import React from 'react'
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

export interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user}) => {
  return (
    <li data-test={`user-item-${user.id}`} className="user-item">
        <Card className="user-item__content">
          <Link to={`/${user.id}/places`}>
          <div className="user-item__image">
            <Avatar image={user.image} alt={user.name} />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3> {user.numOfPlaces} {user.numOfPlaces === 1 ? 'Place' : 'Places'} </h3>
          </div>
          </Link>
        </Card>

    </li>
  )
}

export default UserItem