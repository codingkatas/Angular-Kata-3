/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata, kataModule */

namespace('kata.service');
kata.service.TodoService = function () {
    var getTodoList = function() {
        var list = [
            {
                subject:'Take the dishes',
                done:false
            },
            {
                subject:'Do my homework',
                done:false
            },
            {
                subject:'Cook dinner',
                done:false
            }
        ];

        return list;
    };

    return {
        getTodoList : getTodoList
    };
};

kataModule.factory('TodoService', function () {
    var theService = kata.service.TodoService();
    return theService;
});
