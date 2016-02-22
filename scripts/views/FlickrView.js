var DEMO = window.DEMO || {};

DEMO.FlickrView = (function () {
    // People keep calling these things Views, but they're really the Controllers.
    // The DOM is the View layer.

    var FlickrView = function(element, photosService, photosTemplate) {
        this.element = element;

        // The View doesn't care where this stuff came from, it just knows that
        // it needs these things to get the job done.
        this.photosModel = null;
        this.photosService = photosService;
        this.photosTemplate = photosTemplate;

        this
            .init()
            .enable();
    };

    FlickrView.prototype.init = function() {
        this.photosService
            .getRandomPhotos(this.setPhotos.bind(this));

        return this;
    };

    // Controllers (sorry, Views) request data and ask the real View (the DOM)
    // to display it somehow.

    FlickrView.prototype.setPhotos = function (photosModel) {
        this.photosModel = photosModel;

        this.render();

        return this;
    };

    FlickrView.prototype.render = function() {
        var photos = this.photosModel.getPhotos();

        if (!photos) {
            return this;
        }

        this.element.innerHTML = this.photosTemplate(photos);

        return this;
    };

    // Controllers also handle user input and figure out how to ask the data
    // to update itself based on what the user requested to have happen.

    FlickrView.prototype.enable = function() {
        this.element
            .addEventListener('click', this.onClick.bind(this));

        return this;
    };

    FlickrView.prototype.onClick = function() {
        // Get new random photos
        this.init();
    };

    return FlickrView;
}());
