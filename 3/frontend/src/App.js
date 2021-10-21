import { useRef, useState } from 'react';
import clss from 'classnames';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import './App.css';
import Item from './Item';
import { toggleTask, createTask, deleteTask, fetchTaskList } from './api';

const ENTER_KEY = 13;

function App() {
  const queryClient = useQueryClient();
  const queryList = useQuery('tasks', fetchTaskList);
  const mutationAddTask = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });
  const mutationDeleteTask = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });
  const mutationToggleTask = useMutation(toggleTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  const inputRef = useRef();

  const [inputValue, setInputValue] = useState('');

  const hanldeInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleNewTodoKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();

    if (inputValue) {
      mutationAddTask.mutate({ task: { title: inputValue } });
      setInputValue('');
    }
  };

  const handleDestroy = (id) => {
    mutationDeleteTask.mutate({ id });
  };
  const handleToggle = (id, completed) => {
    mutationToggleTask.mutate({ id, completed });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Task List</h1>
      </header>

      <section className='main'>
        <div className='todoapp'>
          <div>
            <input
              ref={inputRef}
              className='new-todo'
              placeholder='Enter a new task'
              value={inputValue ?? ''}
              onChange={hanldeInputChange}
              onKeyDown={handleNewTodoKeyDown}
              autoFocus={true}
            />
          </div>
          <ul className='todo-list'>
            {queryList.data?.map((task) => (
              <li key={task._id} className={clss({ completed: task.copmleted })}>
                <Item
                  id={task._id}
                  title={task.title}
                  completed={task.completed}
                  onDestroy={() => handleDestroy(task._id)}
                  onToggle={handleToggle}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
