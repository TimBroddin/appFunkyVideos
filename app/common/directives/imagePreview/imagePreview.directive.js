class imagePreviewDirectiveController {
    constructor($log, $scope, fileReader) {
        this.$log = $log;
        this.$scope = $scope;
        this.fileReader = fileReader;
        this.imageSrc = '';

        this.getFile = (file) => {
            this.fileReader.readAsDataURL(file, $scope)
                .then((result) => {
                    //this.$scope.imageSrc = result;
                    this.ngModel.$setViewValue(result);
                });
            return this.$scope.imageSrc;
        };

    }

    init(model) {
        this.ngModel = model;
    }
}

export const imagePreviewDirective = function() {
    return {
        restrict: 'A',
        scope: {},
        require: ['?ngModel', 'vrtImagePreview'],
        controller:  imagePreviewDirectiveController,
        controllerAs: 'vm',
        link: ($scope, el, attrs, ctrls) => {
            el.bind('change', (e) => {

                const file = (e.srcElement || e.target).files[0];

                const ngModel = ctrls[0];
                const thumbCtrl = ctrls[1];

                thumbCtrl.init(ngModel);
                thumbCtrl.getFile(file);

            });
        },
    };

};

imagePreviewDirectiveController.$inject = ['$log', '$rootScope', 'fileReader'];
