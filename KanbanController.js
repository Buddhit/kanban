
'use strict';

angular.module('app').controller('KanbanController', ['$scope', function ($scope) {
  $scope.kanbanBoard = {
    "columns": [
      {"name": "Assigned", "isSelected" : false, "applicants": [
        {"name": "Buddhi Tamang", "isSelected" : false},
        {"name": "John Sandy", "isSelected" : false}
      ]},
      {"name": "Applied", "isSelected" : false,"applicants": [
        {"name": "Smoke Test",
          "details": "Testing Card Details",  "isSelected" : false},
        {"name": "Lee Bangrig",
          "details": "Testing Card Details" , "isSelected" : false}
      ]},
      {"name": "Skype Interview","isSelected" : false, "applicants": [
        {"name": "Jolia Bachelor",
          "details": "Testing Card Details",  "isSelected" : false},
        {"name": "Riri Bermingham",
          "details": "Testing Card Details" , "isSelected" : false}
      ]},
      {"name": "Shortlisted", "isSelected" : false, "applicants": [
        {"name": "Sam Kailus",
          "details": "Testing Card Details" , "isSelected" : false},
        {"name": "Josh Blackwood",
          "details": "Testing Card Details" , "isSelected" : false},
        {"name": "Martin Bertnik",
          "details": "Testing Card Details", "isSelected" : false}
      ]},
      {"name": "DBS", "isSelected" : false, "applicants": [
      ]},
      {"name": "Hired", "isSelected" : false, "applicants": [
        {"name": "Kasia Hunsdon",
          "details": "Testing Card Details" , "isSelected" : false},
        {"name": "Jonathon Wood",
          "details": "Testing Card Details",  "isSelected" : false},
        {"name": "John Lee",
          "details": "Testing Card Details" , "isSelected" : false}
      ]}
    ]
  };

  $scope.applicantSelected = function(item){
    item.isSelected = allApplicantsSelected(item.applicants);
  }

  $scope.selectAllApplicant = function(item){
    for(var i =0; i< item.applicants.length; i++){
      item.applicants[i].isSelected = item.isSelected;
    }
  }

  $scope.kanbanSortOptions = {

    itemMoved: function (event) {
      console.log(event);
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
      console.log( $scope.kanbanBoard);
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };

  $scope.bulkMove= function(moveStage){
    var destItem = $scope.kanbanBoard.columns.find(function(item){
      return item.name === moveStage;
    })
   for(var i = 0; i < $scope.kanbanBoard.columns.length; i++){
     var item = $scope.kanbanBoard.columns[i];
     var index = item.applicants.length;
     while(index --){
      if(item.applicants[index].isSelected){
        item.applicants[index].isSelected = false;
        destItem.applicants.push(item.applicants[index]);
        item.applicants.splice(index, 1);
      }
     }
     if(item.applicants.length === 0) item.isSelected = false;
   }
    console.log(moveStage)
  }

  function allApplicantsSelected(applicants){
    for(var i =0; i< applicants.length; i++){
      if(!applicants[i].isSelected) return false;
    }
    return true;
  }
}]);

