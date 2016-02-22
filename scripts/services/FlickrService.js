var DEMO = window.DEMO || {};

DEMO.FlickrService = (function () {
    var FlickrService = function(photosModelFactory) {
        return {
            getRandomPhotos: function(callback) {
                // This would typically make an AJAX request or something.
                // We're just faking it with a setTimeout.
                setTimeout(function () {
                    // This is the JSON data we'd typically get from the server.
                    var data = {
                        photos: [
                            { url: 'http://placehold.it/300?text=' + Math.random() },
                            { url: 'http://placehold.it/300?text=' + Math.random() }
                        ]
                    };

                    // We shouldn't use the data directly, so we convert it to
                    // a model. Not sure how, don't care, because factories. Yay.
                    var model = photosModelFactory(data);

                    callback(model);
                }, 1);
            }
        };
    };

    return FlickrService;
}());
