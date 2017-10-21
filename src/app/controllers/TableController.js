(function(){

  angular
    .module('app')
    .controller('TableController', [
      'tableService','$rootScope',
      TableController
    ]);

  function TableController(tableService,rootScope) {
    var vm = this;

    vm.tableData = [];
    console.log(rootScope.userType);

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
