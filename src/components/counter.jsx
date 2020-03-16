import React, { Component } from "react";

class Counter extends Component {
  /*
    state: data that is local/private to that component
      (inaccessible by other components)
    props: data we give to a component, i.e. from other components
      read only!
    some components can have no state and get all their data from props
  */

  /*
  note: Counter is a "Controlled component" because it doesn't have a local state
    and relies on props to get its own data.
    it raises events whenever data needs to be changed
    so, it is controlled by its parent
  */

  /* props is an object that all react components have
      it includes all the attributes that we set in the counters component
      props also has "children", which are like a react element
        these children are tags found between component's beginning and ending tag
        i.e. <p> is the child in the case below:
        <Component>
          <p>Hello</p>
        </Component
  */

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
  //handleIncrement = () => {
  //console.log("Increment clicked", this.state.count);
  // this.state.count++;   alone will update state, but won't be reflected on the view
  // instead, do this (need to tell react what about the state is being updated):
  //console.log(product);
  //this.setState({ value: this.state.value + 1 }); // creates async call to render()
  //};

  // update phase of lifecycle
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Did Update");
    //console.log("prevProps: ", prevProps);
    //console.log("prevState: ", prevState);
    /*if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax request to get new data from the server
    }*/
  }

  // unmount phase of lifecycle
  componentWillUnmount() {
    // good time to remove listeners and stuff (and avoid memory leaks)
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {/* note: we would have to delete this from counters as well
            "the component that owns a piece of the state should be the one modifying it" 
            so, we need to raise an event here and handle it in counters*/}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
