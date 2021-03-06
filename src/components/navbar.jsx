import React from "react";

/*
  note how navbar has a single render method with no handlers, helpers, etc.
    and no state
  so, we can convert to a Stateless Functional Component
    instead of having a class with a render method, all we have is a function 
    returns a react component

  also, we can't use lifecycle hooks on SFCs
*/

// note: we can use props as a parameter so that it is passed properly
// alternatively, use destructuring to just get what we want from props
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#index">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
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
