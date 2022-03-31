import React, {Component} from "react";
import { connect } from "react-redux";

class TaskInput extends Component{
  constructor() {
    super();
    this.state = {
      task: '',
    }
  }
  
  hangleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <div>
        <input 
          type= 'text'
          name= 'taks'
          value= { this.state.taks }
          onChange= { this.hangleChange }          
          id= 'inputTask'
        />
      </div>
    );
  }
}

export default connect(null,null)(TaskInput);

