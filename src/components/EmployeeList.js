import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={(employee) => employee.uid}
        renderItem={({item}) => {
          return this.renderRow(item);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
