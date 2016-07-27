var React = require('react');
var moment = require('moment');

class Todo extends React.Component {
    render() {
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = this.props.createdAt;
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div onClick={() => {
                this.props.onToggle(this.props.id);
            }}>
                <input type="checkbox" checked={this.props.completed} />
                <p>{this.props.text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}

module.exports = Todo;