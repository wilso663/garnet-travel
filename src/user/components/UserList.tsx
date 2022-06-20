import React from 'react'
import UserItem from './UserItem';
import { User } from '../models/user';
import './UserList.css';

export interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return (
      <ul className="users-list">
        { users.map((user: User, index: number) => {
            return <UserItem 
                      key={user.id} 
                      user={user}
                    />
          })
        }
      </ul>
    )
};

export default UserList