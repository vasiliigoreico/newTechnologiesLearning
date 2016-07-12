(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['common', admin]);

    function admin(common) {
        var vm = this;
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);
        
        vm.title = 'Admin';
        vm.subtitle = 'Test subtitle';
        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Admin View'); });
        }
    }
})();