var React = require('react');

// components
var Todo = require('./Todo.js');

class TodoList extends React.Component {
    render() {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <div>
                        <p>Nothing to do.</p>
                    </div>
                );
            }
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} text={todo.text} id={todo.id} completed={todo.completed} createdAt={todo.createdAt} completedAt={todo.completedAt} onToggle={this.props.onToggle} />
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