import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {json} from 'stream/consumers';

type TodoType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

function App() {
  const [get, setGet] = useState<Array<TodoType>>([]);

  const getRequestHandler = () => {
    setGet([]);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setGet(json))
  }, [])

  return (
    <div className="App">
      <Button name={'Clean page'} callBack={getRequestHandler}/>
      <ul>
        {
          get.map(i => {
            return (
              <li key={i.id}>
                <span>{i.id}</span>
                <input type="checkbox" checked={i.completed}/>
                <span>{i.title}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
