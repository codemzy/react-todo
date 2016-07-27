/* global localStorage */

var expect = require('expect');

var TodoAPI = require('../../api/TodoAPI.js');

describe('TodoAPI', () => {
    
    // call before every test to clear localStorage
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    
    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{id: 21, text: 'test todo', completed: false}];
            TodoAPI.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos that is not an array', () => {
            var todosBad = {id: 21, text: 'test todo', completed: false};
            TodoAPI.setTodos(todosBad);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    
    describe('getTodos', () => {
        it('should return empty array for empty localStorage data', () => {
            var startTodos = TodoAPI.getTodos();
            expect(startTodos).toEqual([]);
        });
        it('should return localStorage todos when present', () => {
            var todos = [{id: 21, text: 'test todo', completed: false}];
            localStorage.setItem('todos', JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });
    
});