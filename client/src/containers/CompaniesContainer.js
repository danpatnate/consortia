import React from 'react';
import { connect } from 'react-redux';
import { Modal, Icon, Input, Button } from 'antd';

import Companies from '../components/Companies';
import PageSubHeader from '../components/PageSubHeader';
import { getCompanies, addCompany, deleteCompany, updateCompany } from '../actions';

class CompaniesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          companies: [],
          isTableView: true,
          addCompanyModalVisible: false,
          isLoading: false,
          email: '',
          name: '',
          region: '',
        };
    }

    componentDidMount() {
      this.props.getCompanies();
    }

    handleChange = e => {
      const target = e.target;
      this.setState({ [target.name]: target.value });
    }

    toggleTableView = checked => {
      this.setState({ isTableView: !this.state.isTableView })
    }

    toggleModal = () => {
      this.setState({
        addCompanyModalVisible: !this.state.addCompanyModalVisible,
        name: '',
        email: '',
        region: '',
      })
    }

    addCompanyHandler = e => {
      e.preventDefault();
      const { name, region, email } = this.state;
      const addCompany = this.props.addCompany;

      this.setState({ isLoading: true });

      addCompany({ name, email, region })
      .then((response) => {

        setTimeout(() => {
          this.setState({
            addCompanyModalVisible: false,
            isLoading: false,
          });
        }, 1500);
      })
    }

    render() {
        const {
          isTableView,
          addCompanyModalVisible,
          isLoading,
          email,
          name,
          region,
        } = { ...this.state };

        const { error, loading, companies, deleteCompany, updateCompany } = this.props;

        return (
              <>
                <PageSubHeader showSwitch switchOnChangeHandler={ this.toggleTableView }/>
                <div className="block">
                    <h2>Companies in our Consortium</h2>
                    <Companies
                      isTableView={isTableView}
                      companies={companies}
                      updateCompany={updateCompany}
                      deleteCompany={deleteCompany}
                    />
                    <div onClick={this.toggleModal} className="button button--blue">Add Company</div>
                    <Modal
                      title="Add Company"
                      visible={addCompanyModalVisible}
                      onOk={this.addCompanyHandler}
                      confirmLoading={isLoading}
                      onCancel={this.toggleModal}
                    >
                      <form onSubmit={this.addCompany}>
                        <label>
                          Name:
                          <Input name="name" value={name} onChange={this.handleChange} />
                        </label>
                        <label>
                          Email:
                          <Input name="email" value={email} onChange={this.handleChange} />
                        </label>
                        <label>
                          Region:
                          <Input name="region" value={region} onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit" hidden/>
                      </form>
                    </Modal>
                </div>
              </>
        );
    }
}

const mapStateToProps = state => {
  return {
      companies: state.companies.companies,
      loading: state.companies.loading,
      error: state.companies.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCompanies: () => dispatch(getCompanies()),
        deleteCompany: index => dispatch(deleteCompany(index)),
        addCompany: data => dispatch(addCompany(data)),
        updateCompany: data => dispatch(updateCompany(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer);
