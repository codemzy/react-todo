var React = require('react');

// components
var TodoList = require('./TodoList.js');

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'Walk the dog' },
                { id: 2, text: 'Clean the car' },
                { id: 3, text: 'Build an app' },
                { id: 4, text: 'Make some lunch' }
            ]
        };
    }
    
    render() {
        let {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
}

module.exports = TodoApp;