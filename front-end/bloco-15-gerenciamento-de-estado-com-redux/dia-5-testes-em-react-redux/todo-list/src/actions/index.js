export const CREATE_TASK = 'CREATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const MOVE_TASK_UP = 'MOVE_TASK_UP';
export const MOVE_TASK_DOWN = 'MOVE_TASK_DOWN';
export const SAVE_TASKS = 'SAVE_TASKS';
export const REMOVE_DONE_TASKS = 'REMOVE_DONE_TASKS';
export const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS';

export const createTask = (payload) => ({
  type: CREATE_TASK, payload,
});