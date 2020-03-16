import React, { Component } from "react";
import Counter from "./counter";

/*
    This class will let us make a parent Component for our child
    Counter Components. This way, we can have several Counters
    all with different (isolated) states.
*/
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            // we pass key and id because internally, react needs the key
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            //value={counter.value}
            //id={counter.id}
            // the above 2 lines aren't necessary if we just pass the whole counter object
          />
        ))}
      </div>
    );
  }
}

export default Counters;
