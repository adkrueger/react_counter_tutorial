import React, { Component } from "react";

class Counter extends Component {
  state = {
    // props is an object that all react components have
    // it includes all the attributes that we set in the counters component
    value: this.props.value
    //tags: ["tag1", "tag2", "tag3"]
  };

  /*  conditional rendering
    renderTags() {
      if(this.state.tags.length === 0) return <p>There are no tags.</p>;

      return <ul>{this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>;
    }


    also note:
    in JS, if we do something like console.log(true && "hello!")
    the output will be "hello" because it is truthy

    so in render, we could add a tag like:
    {this.state.tags.length === 0 && "Please create a new tag."}
    to get an additional message when the length is 0
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
    //console.log(product);
    this.setState({ value: this.state.value + 1 }); // creates async call to render()
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
        {/*<ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li> // need key to give unique li's (within this ul)
          ))}
          </ul>*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // want these in all cases
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
