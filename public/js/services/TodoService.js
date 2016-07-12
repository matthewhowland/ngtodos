(function(){
  angular.module('ngtodos')
          .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    var todos = [];
    var o = {
      create: createTodo,
      readAll: getAll,
      update: updateTodo,
      delete:deleteTodo,

    };
    return o;

    function createTodo(){}
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos')
                  .then(function(response){
                    todos = response.data;
                    return todos;
                  });
    }
    function updateTodo(){}
    function deleteTodo(){}
  }
})()
