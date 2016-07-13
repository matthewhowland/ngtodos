(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.todos = TodoService.todos;
    $scope.create = createTodo;
    getTodos();


    function getTodos(){
      console.log('getting todos...');
      TodoService.readAll()
                .then(function(){
                  $scope.todos = TodoService.todos;
                  console.log($scope.todos);
                })
    }


    function createTodo(description){
      TodoService.create(description)
                .then(function(){
                  $scope.todos = TodoService.todos;
                  $scope.description = '';
                  getTodos();
                })
    }
    }
})();
