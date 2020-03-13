import React, { Component } from "react";
import Counter from "./counter";

/*
    This class will let us make a parent Component for our child
    Counter Components. This way, we can have several Counters
    all with different (isolated) states.
*/
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            // we pass key and id because internally, react needs the key
            key={counter.id}
            onDelete={this.handleDelete}
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
