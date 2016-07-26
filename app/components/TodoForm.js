var React = require('react');

class TodoForm extends React.Component {
    
    _onSubmitAdd(e) {
       e.preventDefault();
       var text = this.refs.text.value;
       if (text.length > 0) {
           this.props.onAdd(text);
           this.refs.text.value = "";
       }
    }
    
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this._onSubmitAdd.bind(this)}>
                    <input type="text" placeholder="To do..." ref="text" />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
}

module.exports = TodoForm;