/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata */

namespace('kata.home');


kata.home.HomeController = function ($scope, TodoService) {

    $scope.selectedTodoSubject;

    /*to make the subject of the selected todo item available to the child scope, you must create a model object,
    and put the selected todo subject into this. Use the form:

    $scope.model = {
        attribute: value
    };

    */

};

