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
    this.setState({
      [name]: value,
    })
  };

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
