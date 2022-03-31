import {
  CREATE_TASK,
  REMOVE_TASK,
  MOVE_TASK_UP,
  MOVE_TASK_DOWN,
  SAVE_TASKS,
  REMOVE_DONE_TASKS,
  REMOVE_ALL_TASKS,
} from '../actions/index';

const INITIAL_STATE = { };

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.state) {
    case CREATE_TASK:
      return state;
    case REMOVE_TASK:
      return state;
    case MOVE_TASK_UP:
      return state;
    case MOVE_TASK_DOWN:
      return state;
    case SAVE_TASKS:
      return state;
    case REMOVE_DONE_TASKS:
      return state;
    case REMOVE_ALL_TASKS:
      return state;
    default:
      return state;
  }
}