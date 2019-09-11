import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import { Avatar, Icon, Switch } from 'antd';

const PageSubHeader = ({ className, children, showSwitch, switchOnChangeHandler, ...rest }) => (
  <div className="page--sub-header">
    <a href="/">
      <span onClick={() => {}} className="button button--blue">
        <Icon type="home" />
      </span>
    </a>
    {showSwitch &&
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon style={{ color: '#FFF', marginRight: '10px', fontSize: '22px' }} type="idcard" />
        <Switch defaultChecked onChange={switchOnChangeHandler} />
        <Icon style={{ color: '#FFF', marginLeft: '10px', fontSize: '22px' }} type="table" />
      </div>
    }
  </div>
)


export default PageSubHeader
