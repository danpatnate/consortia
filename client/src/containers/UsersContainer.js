import React from 'react';
import {connect} from 'react-redux';
import Users from '../components/Users';
import PageSubHeader from '../components/PageSubHeader';

import {
    getUsers,
} from '../actions';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        const getUsers = this.props.getUsers;

        getUsers()
        .then((response) => {
            this.setState({ users: response.payload })
        })
    }
    render() {
        const users = this.state.users;

        return (
              <>
                <PageSubHeader />
                <div className="block">
                  <h2>Users in our Consortium</h2>
                  <Users users={users} />
                </div>
              </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const {
      users,
  } = state;

  return {
      users,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
