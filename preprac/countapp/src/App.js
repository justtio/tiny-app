import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //never use hard code build up a page,
  //so here map operator is very useful

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //create a new array
    const index = counters.indexOf(counter); //check out the counter's index
    counters[index] = { ...counter }; //use spread operator get the value of counter
    counters[index].value++; //increse the counter value
    this.setState({ counters });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); //dont forget that here is a object
  }; //delete item always use items' id

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };
  render() {
    return (
      <div className="App">
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
