import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  /*  conditional rendering
    renderTags() {
      if(this.state.tags.length === 0) return <p>There are no tags.</p>;

      return <ul>{this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>;
    }
  */

  /*
  constructor() {
    super();
    // gives a new instance of handleIncrement so "this" will reference the current counter object
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment clicked", this.state.count);
  }
  */

  /*  
    this achieves the same thing more elegantly.
    arrow functions don't rebind the this keyword; they inherit it
  */
  handleIncrement = product => {
    //console.log("Increment clicked", this.state.count);
    // this.state.count++;   alone will update state, but won't be reflected on the view
    // instead, do this (need to tell react what about the state is being updated):
    console.log(product);
    this.setState({ count: this.state.count + 1 }); // creates async call to render()
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li> // need key to give unique li's (within this ul)
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // want these in all cases
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
