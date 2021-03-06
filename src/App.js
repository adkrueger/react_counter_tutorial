import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // mount hook
  /*
    this is called whenever an App Component is instantiated
    which gives us an opportunity to manipulate the state based on props we receive
  */
  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // note how we're not using setState()
    //   (causes an error because it needs a component to be rendered and placed in the DOM)
    //this.state = this.props.whatever;
  }

  componentDidMount() {
    // Ajax call (which gets data from a server)
    //this.setState({});

    console.log("App - Mounted");
  }

  // update hook
  handleIncrement = counter => {
    /* ... is the "spread" operator
        it essentially gives us everything in whatever array follows it
            (regardless of the length of the array)
    */
    const counters = [...this.state.counters];

    // here we are cloning the given counter object, which we find in the counters array
    // this way we don't directly change state
    //    (this has to do with changes being overwritten and "how synchronous" setState is)
    const index = counters.indexOf(counter);
    console.log({ ...counter });
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state);

    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // unmount hook
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
