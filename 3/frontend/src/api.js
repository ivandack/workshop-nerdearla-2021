export const fetchTaskList = () =>
  fetch(`${process.env.REACT_APP_BACKEND}/tasks`, {
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json());

export const createTask = ({ task }) =>
  fetch(`${process.env.REACT_APP_BACKEND}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());

export const deleteTask = ({ id }) =>
  fetch(`${process.env.REACT_APP_BACKEND}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json());

export const toggleTask = ({ id, completed }) =>
  fetch(`${process.env.REACT_APP_BACKEND}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  }).then((res) => res.json());
