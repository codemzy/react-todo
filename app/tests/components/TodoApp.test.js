var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('../../components/TodoApp.js');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    
    it('should add todo to the todos state on _handleAddTodo', () => {
        var todoText = "Test text";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: []});
        todoApp._handleAddTodo(todoText);
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
});