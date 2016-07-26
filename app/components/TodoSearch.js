var React = require('react');

class TodoSearch extends React.Component {
    
    _handleSearch() {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="search" placeholder="Search..." ref="searchText" onChange={this._handleSearch.bind(this)} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this._handleSearch.bind(this)} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

module.exports = TodoSearch;