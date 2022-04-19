import React from 'react';

const Users=({users, loading}) => {
    return (
        <ul className="List-users">
        {
            users.map((user,i) => (
                <li className='List-item'>
                    {user.name} {user.surname} {user.login} {user.email}
                </li>
            ))

            
        }
        </ul>
    )
}

export default Users;