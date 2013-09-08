/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global module, inject, describe, it, oef, expect, log */

describe('HomeController tests', function () {

    beforeEach(function () {
        module('Kata');
    });

    describe('Test that HomeController provides a Service with a Todo list', function () {

        var scope;
        var todoService;

        beforeEach(inject(function ($controller, $rootScope, TodoService) {
            scope = $rootScope.$new();
            todoService = TodoService;
            $controller('kata.home.HomeController', {
                $scope: scope,
                TodoService: todoService
            });
        }));

        it("should have a service named TodoService"), function() {
            expect(todoService).not.toBe(null);
        }

        it('should get a list of ToDos from the service', function () {

            var todos = scope.todos;
            expect(todos.length).toBe(3);
        });
    });


});