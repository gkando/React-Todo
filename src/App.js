import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

export const Todos = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to your Todo App!",
      todoData: Todos
    };
  }

  toggleItem = id => {
    
    this.setState(prevState => {
      return {
        todoData: prevState.todoData.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    });
  };


  addTodo = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState(prevState => {
      return {
        todoData: [...prevState.todoData, newItem]
      };
    });
  };


  deleteItem = () => {
    const filteredItems = this.state.todoData.filter(item => {
      return item.completed !== true
    })

    this.setState({
      todoData: filteredItems,
    })
  }


  render() {
    return (
      <div className="App">

        <div className="header">
          <h2>{this.state.message}</h2>
          <TodoForm addTodo={this.addTodo} />
          <button className='clear-btn' onClick={this.deleteItem}>Clear Complete</button>

        </div>

        <div>
          <div className='obj'>
            <span className="var-highlight">export</span> const Todos = [
          </div>
            <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem} />
          ]
        </div>
      </div>
    );
  }
}

export default App;