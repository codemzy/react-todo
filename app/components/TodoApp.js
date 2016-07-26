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
                { id: 1, text: 'Walk the dog' },
                { id: 2, text: 'Clean the car' },
                { id: 3, text: 'Build an app' },
                { id: 4, text: 'Make some lunch' }
            ]
        };
    }
    
    _handleAddTodo(text) {
        console.log('new todo: ' + text);
    }
    
    _handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    
    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this._handleSearch.bind(this)} />
                <TodoList todos={todos} />
                <TodoForm onAdd={this._handleAddTodo.bind(this)} />
            </div>
        );
    }
}

module.exports = TodoApp;