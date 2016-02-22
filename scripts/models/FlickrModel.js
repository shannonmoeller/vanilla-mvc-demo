var DEMO = window.DEMO || {};

DEMO.FlickrModel = (function () {
	// Models are a fixed data structure. The input we're given may
	// change in form, but no one else needs to know about that.

    var FlickrModel = function (data) {
    	// We're going to store a list of photos. The API might
    	// change down the line to be something other than,
    	// `data.photos`, but we're always going to work with a
    	// list of photos.
        this.photos = data.photos || [];
    };

    FlickrModel.prototype.getPhotos = function() {
        return this.photos;
    };

    return FlickrModel;
}());
