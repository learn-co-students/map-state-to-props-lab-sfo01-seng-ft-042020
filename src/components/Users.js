import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  renderUsernames() {
    console.log(this.props);
    return this.props.users.map((user, i) => {
      return <li key={i}>{user.username}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>{this.props.userCount}</h4>
        <ul>
          Users!
          {this.renderUsernames()}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
