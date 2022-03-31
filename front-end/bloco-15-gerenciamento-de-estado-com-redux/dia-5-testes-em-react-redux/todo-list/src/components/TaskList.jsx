import React, {Component} from "react";
import { connect } from "react-redux";
import { PropTypes } from 'prop-types';

class TaskList extends Component {
  render() {
    const { savedTasks } = this.props;
    return(
      <div>
        <ul>
          {savedTasks.map((task)=> <li>
            {task.text}
          </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedTasks: state.tasks,
})

TaskList.propTypes = {
  savedTasks: PropTypes.shape({ }).isRequired,
};

export default connect(mapStateToProps,null)(TaskList);
