(function () {
    "use strict";

    var sectionHeight = $('section.front').height();
    console.log(sectionHeight);
    $('section.front video').css('height', sectionHeight);
});
