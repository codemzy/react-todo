var $ = require('jquery');
/* global localStorage */

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log("error with JSON parse");
        }
        if ($.isArray(todos)) {
            return todos;
        } else {
            return [];
        }
    },
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;
        return filteredTodos;
    }
};