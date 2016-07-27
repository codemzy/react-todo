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
        // filter by showCompleted
        filteredTodos = filteredTodos.filter(function(todo) {
            // return the todo if it is false (not completed) OR if showCompleted is true return the item regardless
            return !todo.completed || showCompleted;
        });
        
        // filter by searchText
        
        // Sort todos with none-completed first
        return filteredTodos;
    }
};