(function () {
    "use strict";

    new Vivus('draw_M', { type: 'delayed', duration: 125 }, function () {
        $('svg#draw_M path').css('fill', '#ffffff');
    });

})();
