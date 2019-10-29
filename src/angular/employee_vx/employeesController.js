app.controller("employeesController", function ($scope, $http) {
  $scope.firstName = "George";
  $scope.lastName = "John";

  $scope.names = ["John", "George", "Jack"]

  var SERVER = "http://dummy.restapiexample.com/"
  var GET_EMPLOYEE_URL = "api/v1/employees"
  var GET_EMPLOYEE_DETAIL = "api/v1/employee/"

  let url = SERVER + GET_EMPLOYEE_URL;
  $http.get(url).then(function (response) {
    console.log("Received response");
    $scope.employees = response.data;
  });


});