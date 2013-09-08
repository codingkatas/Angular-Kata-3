Angular-Kata-3

This kata will be about scopes and scope inheritance.

Scopes in AngularJS is inherited by child scope.
There is a caveat to this, and that is that you can easily reference objects with properties all the way down the
inheritance chain, but you can not inherit primitives. Especially if you have two way binding on an inherited property.
To overcome this, you must put data which you want to inherit, into an object on the parent scope.
Now it is available to all the childscopes and you can have normal two way databinding in the view.
To read more about his subject, be sure to consult this answer on stackoverflow.coom:

http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-prototypical-inheritance-in-angularjs

In this kata, you must handle this exact scenario. The list of todos is published in the TodoListController.
When a todo item is clicked, it is set using the 'selectTodo' method i TodoListController. The subject is set on the
parentscope (HomeController) from TodoListController.
The value 'selectedTodoSubject' is referenced from index.html and is thus bound.
There is another controller, 'SelectedTodoController', which is not in use in this scenario. The controller is empty
and is only here to prove the point of inheritance.

You must make sure that subject of the clicked item is shown in the field below the headline 'Selected todo'.
There a hints placed in the code.


You can check out the solution by cloning the 'solution' branch of this repository.
