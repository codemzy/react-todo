var React = require('react');

class Todo extends React.Component {
    render() {
        return (
            <div>
                {this.props.id}. {this.props.text}
            </div>
        );
    }
}

module.exports = Todo;