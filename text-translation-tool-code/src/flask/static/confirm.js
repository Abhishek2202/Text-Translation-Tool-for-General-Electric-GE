var demo = angular.module('demo', ['xeditable', 'smart-table']);

demo.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);


demo.controller(
  'Ctrl',

  ['$scope', '$window', '$filter', '$http', function Ctrl($scope, $filter, $http, $window) {

    // $scope.inputrelationsdata = $window.inputrelationsdata;
    // console.log($scope.inputrelationsdata);
    // $scope.relation = [];
    // $scope.init = function () {
    //   var input = document.getElementById("inputrelations")innerHTML;
    //   for (var i = 0; i < input | length; i++) {
    //     $scope.relation.push({
    //       id: i + 1,
    //       content: input[i]
    //     })
    //   };
    // };

    // $scope.show = function (user) {
    //   if (user.group && $scope.groups.length) {
    //     var selected = $filter('filter')($scope.groups, { id: user.group });
    //     return selected.length ? selected[0].text : 'Not set';
    //   } else {
    //     return user.groupName || 'Not set';
    //   }
    // };

    // filter users to show
    // $scope.filterUser = function (user) {
    //   return user.isDeleted !== true;
    // };

    // mark user as deleted


    // $scope.selected = [];
    // // Function to get data by selecting a single row
    // $scope.select = function (id) {
    //   var found = $scope.selected.indexOf(id);

    //   if (found == -1) $scope.selected.push(id);
    //   else $scope.selected.splice(found, 1);
    // };

    // $scope.saveRow = function () {
    //   var contenteditable = document.querySelector('[contenteditable]'),
    //     text = contenteditable.textContent;

    //   console.log(text);
    // };

    // $scope.addRow = function () {
    //   var blankrow = {
    //     id: null,
    //     firstName: null,
    //     lastName: null,
    //     birthDate: null,
    //     balance: null,
    //   };
    //   $scope.rowCollection.push(blankrow);
    // };

    // $scope.deleteRow = function () {
    //   var selectDel = [];
    //   var collectionDel = [];
    //   for (var selindex = 0; selindex < $scope.selected.length; selindex++) {
    //     for (var colindex = 0; colindex < $scope.rowCollection.length; colindex++) {
    //       if ($scope.rowCollection[colindex].id == $scope.selected[selindex]) {
    //         selectDel.push(selindex);
    //         collectionDel.push(colindex);
    //         console.log($scope.rowCollection[colindex].id);
    //       }
    //     }
    //   }
    //   for (var selindex2 = selectDel.length - 1; selindex2 >= 0; selindex2--) {
    //     $scope.selected.splice(selectDel[selindex2], 1);
    //   }
    //   for (
    //     var colindex2 = collectionDel.length - 1;
    //     colindex2 >= 0;
    //     colindex2--
    //   ) {
    //     $scope.rowCollection.splice(collectionDel[colindex2], 1);
    //   }
    // };

    // $scope.model = {
    //   vendors: [
    //     {
    //       id: 1,
    //       variableName: 'Report',
    //       content: '8-88386'
    //     },
    //     {
    //       id: 2,
    //       variableName: 'Quote No',
    //       content: 'QNI85932'
    //     },
    //     {
    //       id: 3,
    //       variableName: 'Request ID',
    //       content: 'ROM22-283'
    //     },
    //     {
    //       id: 4,
    //       variableName: 'ADN',
    //       content: '5155668Ql0ME'
    //     }
    //   ],
    //   selected: {}
    // };

    // gets the template to ng-include for a table row / item
    $scope.getTemplate = function (vendor) {
      if (vendor.id === $scope.model.selected.id) return 'edit';
      else return 'display';
    };

    $scope.editvendor = function (vendor) {
      $scope.model.selected = angular.copy(vendor);
    };

    $scope.savevendor = function (idx) {
      console.log('Saving vendor');
      $scope.model.vendors[idx] = angular.copy($scope.model.selected);
      $scope.reset();
    };

    $scope.reset = function () {
      $scope.model.selected = {};
    };
  }
  ]
);


