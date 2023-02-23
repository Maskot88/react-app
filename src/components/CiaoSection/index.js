import React, { Component } from "react";
import CiaoList from "./CiaoList";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 10, firstName: "Brad", lastName: "Pitt" },
        { id: 7, firstName: "Tom", lastName: "Rot" },
        { id: 3, firstName: "Jon", lastName: "Snow" },
        { id: 12, firstName: "Fred", lastName: "Mercury" },
        { id: 9, firstName: "George", lastName: "Clune" },
      ],
      isDirectGrowthById: true,
    };
  }
  sortById = () => {
    const { users, isDirectGrowthById } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => (isDirectGrowthById ? a.id - b.id : b.id - a.id));
    this.setState({ users: newUsers, isDirectGrowthById: !isDirectGrowthById });
  };
  sortByName = () => {
    const { users, isDirectGrowthByName } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      const nameA = a.firstName.toUpperCase() + " " + a.lastName.toUpperCase();
      const nameB = b.firstName.toUpperCase() + " " + b.lastName.toUpperCase();
      if (isDirectGrowthByName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    this.setState({
      users: newUsers,
      isDirectGrowthByName: !isDirectGrowthByName,
    });
  };
  sortByLastName = () => {
    const { users, isDirectGrowthByLastName } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      const nameA = a.firstName.toUpperCase() + " " + a.lastName.toUpperCase();
      const nameB = b.firstName.toUpperCase() + " " + b.lastName.toUpperCase();
      if (isDirectGrowthByLastName) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    this.setState({
      users: newUsers,
      isDirectGrowthByLastName: !isDirectGrowthByLastName,
    });
  };
  render() {
    const {
      users,
      isDirectGrowthById,
      isDirectGrowthByName,
      isDirectGrowthByLastName,
    } = this.state;
    return (
      <>
        <button onClick={this.sortById}>
          sort by id {isDirectGrowthById ? "growth" : "less"}
        </button>
        <button onClick={this.sortByName}>
          sort by name {isDirectGrowthByName ? "growth" : "less"}
        </button>
        <button onClick={this.sortByLastName}>
          sort by last name {isDirectGrowthByLastName ? "growth" : "less"}
        </button>
        <CiaoList users={users}/>
      </>
    );
  }
}

export default CiaoSection;
