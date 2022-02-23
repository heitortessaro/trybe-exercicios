import { Component } from "react";
import Form from "./components/Form";

const INITIAL_INFORMATION = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  houseType: '',
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_INFORMATION;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;
    if (name === 'name') value = value.toUpperCase();
    this.setState({
      [name]: value,
    })
  };

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          currentState={this.state}
        />
      </div>
    );
  }
}

export default App;
