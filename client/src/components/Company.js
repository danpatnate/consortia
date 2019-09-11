import React from 'react'

const Company = ({ className, children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
)

export default Company
