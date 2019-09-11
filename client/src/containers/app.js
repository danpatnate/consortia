import {connect} from 'react-redux';
import React from 'react';
import App from '../App.js';
import { getCompanies } from '../actions';

const isMobileDevice = () => {
    if (window.innerWidth <= 800) {
        return true;
    }
    return false;
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state, {
        isMobileDevice: isMobileDevice(),
        companies: state.companies,
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCompanies: () => dispatch(getCompanies()),
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
