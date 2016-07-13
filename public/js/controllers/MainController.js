(function(){
  angular.module('ngtodos') //getter
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService'];

  function MainController($scope, TodoService){
    $scope.todos = TodoService.todos;
    getTodos();
    console.log('here')
    function getTodos(){
      TodoService.readAll()
                .then(function(){
                  $scope.todos = TodoService.todos;
                  console.log($scope.todos);
                })
    }



    }
})();
