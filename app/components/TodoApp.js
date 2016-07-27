var React = require('react');

// components
var TodoList = require('./TodoList.js');
var TodoForm = require('./TodoForm.js');
var TodoSearch = require('./TodoSearch.js');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                { id: 1, text: 'Walk the dog', completed: false },
                { id: 2, text: 'Clean the car', completed: true },
                { id: 3, text: 'Build an app', completed: false },
                { id: 4, text: 'Make some lunch', completed: false }
            ]
        };
    }
    
    _handleAddTodo(text) {
        var lastID = 0;
        if (this.state.todos.length > 0) {
            lastID = this.state.todos[this.state.todos.length-1].id;
        }
        var newID = lastID + 1;
        console.log(newID);
        this.setState({
            todos: [
            ...this.state.todos,
            { id: newID, text: text, completed: false }
            ]
        });
    }
    
    _handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    
    _handleToggle(id) {
        var updatedTodos = this.state.todos.map(function(todo) {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        });
        console.log(id);
    }
    
    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this._handleSearch.bind(this)} />
                <TodoList todos={todos} onToggle={this._handleToggle.bind(this)} />
                <TodoForm onAdd={this._handleAddTodo.bind(this)} />
            </div>
        );
    }
}

module.exports = TodoApp;