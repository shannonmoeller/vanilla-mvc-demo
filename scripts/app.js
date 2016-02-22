var DEMO = window.DEMO || {};

DEMO.App = (function() {
    // The App is the only thing that knows how to create new things. We make
    // things in factories so it's easier to swap things out down the road if
    // we need to. For example, if we switch from Flickr to Instagram.

    var App = {};

    // You get a factory, and you get a factory, everyone gets a factory!!!
    // Factories know how to make things. How things are made can change, but
    // the rest of the app doesn't have to give a flying fig.

    function photosModelFactory(data) {
        return new DEMO.FlickrModel(data);
    }

    function photosServiceFactory(modelFactory) {
        return DEMO.FlickrService(modelFactory);
    }

    function photosTemplateFactory() {
        return DEMO.photosTemplate;
    }

    function photosViewFactory(element, service, template) {
        return new DEMO.FlickrView(
            element,
            service,
            template
        );
    }

    // This is where the app starts to put all of the separate things together
    // into a larger useful whole. Using factories is a bit more typing, but
    // the whole point is to manage the complexity well to make it easier to
    // work with down the road.

    var photosService = photosServiceFactory(photosModelFactory);
    var photosTemplate = photosTemplateFactory();
    var photoDivs = document.querySelectorAll('.photos');

    [].forEach.call(photoDivs, function (photoDiv, i) {
        App['photosView' + i] = photosViewFactory(
            photoDiv,
            photosService,
            photosTemplate
        );
    });

    return App;
}());

console.log('DEMO', DEMO);
