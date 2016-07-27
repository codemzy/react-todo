var React = require('react');

class Todo extends React.Component {
    render() {
        return (
            <div onClick={() => {
                this.props.onToggle(this.props.id);
            }}>
                <input type="checkbox" checked={this.props.completed} />
                {this.props.text}
            </div>
        );
    }
}

module.exports = Todo;