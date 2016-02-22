var DEMO = window.DEMO || {};

DEMO.photosTemplate = (function() {
    // Some people like to call templates "views", but that just muddies the
    // water even more. Just call them templates.

    // {{#each photo}}
    //     <img src="{{url}}" />
    // {{/each}}

    function photosTemplate(photos) {
        var html = '';

        photos.forEach(function (photo) {
            html += '<img src="' + photo.url + '" />';
        });

        return html;
    }

    return photosTemplate;
}());
