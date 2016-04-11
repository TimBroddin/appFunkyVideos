//TODO: refactor show functions
export default class PicturesController {
    constructor(Upload) {

        this.Upload = Upload;

        this.className = 'drd';
        this.grayscale = '';

        this.resetAllTemplates();
    }

    upload(file) {
        this.Upload.upload({
            url: '/api/convertimage',
            data: {file: file}
        }).then((resp) => {
            this.grayscale = 'http://localhost:3000/'+ resp.data.url;
            console.log('Success ' + resp.config.data.file.name + ' uploaded. Response: ' + resp.data.url);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }

    getScheme(scheme) {

        if(scheme === 'ak' ){
            this.showTempltesAK = !this.showTempltesAK;
        }
        if(scheme === 'drd' ){
            this.showTempltesDRD = !this.showTempltesDRD;
        }
        if(scheme === 'r1'){
            this.showTempltesR1 = !this.showTempltesR1;
        }
        console.log('Scheme', this.selected);
    }

    getPicture() {
        this.isReady = !this.isReady;
    }

    showMurderface(scheme) {
        this.resetAllTemplates();
        this.isMurderface = true;
        this.className = scheme;
    }

    showSkwigelf(scheme) {
        this.resetAllTemplates();
        this.isSkwigelf = true;
        this.className = scheme;
    }

    showPickels(scheme) {
        this.resetAllTemplates();
        this.isPickels = true;
        this.className = scheme;
    }

    showDethklok(templateClass, footerText, scheme) {
        this.resetAllTemplates();
        this.isDethklok = true;
        this.templateClass = templateClass;
        this.footerText = footerText;
        this.className = scheme;
    }

    showExplosion(scheme) {
        this.resetAllTemplates();
        this.isExplosion = true;
        this.className = scheme;
    }

    showBob(scheme) {
        this.resetAllTemplates();
        this.isBob = true;
        this.className = scheme;
    }

    showTina(scheme) {
        this.resetAllTemplates();
        this.isTina = true;
        this.className = scheme;
    }

    resetAllTemplates() {
        this.isMurderface = false;
        this.isSkwigelf = false;
        this.isExplosion = false;
        this.isReady = false;
        this.isPickels = false;
        this.isDethklok = false;
        this.isBob = false;
        this.isTina = false;
    }

}

PicturesController.$inject = ['Upload'];
