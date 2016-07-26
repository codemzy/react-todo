var React = require('react');

// components
var Todo = require('./Todo.js');

class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} text={todo.text} id={todo.id} />
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
}

module.exports = TodoList;