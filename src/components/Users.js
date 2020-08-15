import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((u) => {
            return <li>{u.username}</li>;
          })}
          {
            /* In addition, display the total number of users curently in the store */
            this.props.users.length
          }
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
