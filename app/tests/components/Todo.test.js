var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('../../components/Todo.js');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    it('should call onToggle prop with id on click', () => {
        var todoData = {id: 11, text: 'Test text', completed: true };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(11);
    });
});