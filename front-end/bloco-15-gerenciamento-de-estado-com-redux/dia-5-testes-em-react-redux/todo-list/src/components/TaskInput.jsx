import React, {Component} from "react";
import { connect } from "react-redux";
import { PropTypes } from 'prop-types';
import { createTask } from "../actions";

class TaskInput extends Component{
  constructor() {
    super();
    this.state = {
      task: '',
    }
  }
  
  hangleChange = ({ target }) => {
    const { name, value } = target;
    // console.log(value);
    this.setState({
      [name]: value,
    })
  }

  saveTask = (task) => {
    const { createTask, savedTasks } = this.props;
    const newTask = {
      text: task,
      finished: false,
      selected: false,
      position: savedTasks.length,
    }
    console.log(newTask);
    this.setState({
      task: '',
    }, () => createTask(newTask));
  }

  render() {
    return (
      <div>
        <input 
          type= 'text'
          name= 'task'
          value= { this.state.taks }
          onChange= { this.hangleChange }          
          id= 'inputTask'
        />
        <button
          type="button"
          id="create-task"
          onClick={ () => this.saveTask(this.state.task) }
        >
          Criar tarefa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedTasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (payload) => dispatch(createTask(payload)),
});

TaskInput.propTypes = {
  createTask: PropTypes.func.isRequired,
  savedTasks: PropTypes.shape({ }).isRequired,
};

export default connect(mapStateToProps,mapDispatchToProps)(TaskInput);

