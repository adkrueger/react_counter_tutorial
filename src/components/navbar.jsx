import React, { Component } from "react";

/*
  note how navbar has a single render method with no handlers, helpers, etc.
    and no state
  so, we can convert to a Stateless Functional Component
    instead of having a class with a render method, all we have is a function 
    returns a react component
*/

// note: we used props as a parameter so that it is passed properly
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#index">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

/*
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#index">
          NavBar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/
export default NavBar;
