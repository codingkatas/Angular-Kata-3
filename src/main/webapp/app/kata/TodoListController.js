/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata */

namespace('kata.home');


kata.home.TodoListController = function ($scope, TodoService) {
    $scope.todos = TodoService.getTodoList();

    //Reset all the todos, setting the 'done' property to 'false'
    var resetTodos = function() {
        $scope.todos.forEach(function(todo) {
            todo.done = false;
        });
    };

    $scope.selectTodo = function(todo) {

        //Reset the all the todo.done values everytime we click the checkbox
        resetTodos();

        //set the selected todo item to 'true'. Notice how this is bound using ng-model in the table
        todo.done = true;

        //Change the line below to use the objectified reference from the parent scope, instead of this.
        // That is: $scope.[object].selectedTodoSubject = todo.subject;
        $scope.selectedTodoSubject = todo.subject;

    };

};

