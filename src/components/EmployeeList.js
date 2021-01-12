import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
// import {FlatList} from 'react-native-gesture-handler';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    console.log(this.props.employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={(employee) => employee.phone}
        renderItem={({item}) => {
          return this.renderRow(item);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.employees);
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  // console.log(employees);
  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
