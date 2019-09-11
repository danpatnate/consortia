import React, { Fragment } from 'react';
import PageSubHeader from './PageSubHeader';
import User from './User';

const Users = ({ users, ...rest }) => (
  <div style={{ marginTop: '30px' }}>
    {users && users.map(user => (
      <User
        key={user.key}
        name={user.name}
        address={user.address}
        picture={user.picture}
        {...rest}
      />
    ))}
  </div>
);

export default Users
