import React, { Fragment } from 'react'
import { Avatar } from 'antd';

const User = ({ className, children, name, address, picture, ...rest }) => (
  <div className="user">
    <Avatar className="user__avatar">{name.charAt(0)}</Avatar>
    <div className="user__details" {...rest}>
      <div>{name}</div>
      <div>{address}</div>
      <div>{name}</div>
      <div>{name}</div>
      {children}
    </div>
  </div>
)


export default User
