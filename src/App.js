import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users") //fetch the API from this URL
      .then(res => res.json()) //Get the result "res" and convert it to json format
      .then(json => {
        this.setState({ isLoaded: true, items: json });
      }); //Take the json that we just formated and create an arrow function to not lose contant.
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading.....</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name:{item.name} ------ Email: {item.email} ------ Address:
                {item.address.street}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}

export default App;
