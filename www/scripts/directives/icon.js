 'use strict';
 /*
 * Usage: <span topcoat-icon="alert"></span>
 */
angular.module('opvko').directive('topcoatIcon', function () {

    var fontfaceSupported = Modernizr.fontface;

    // don't use the IcomaticUtils fallback data structure.
    // For performance use a lookup hash instead.
    // This will be orders of magnitude faster.
    var fallbacks = {};

    for (var i = 0; i < IcomaticUtils.fallbacks.length; i++) {
        fallbacks[IcomaticUtils.fallbacks[i].from] = IcomaticUtils.fallbacks[i].to;
    }

    return {
        replace: true,
        restrict: 'a',
        compile: function (el, attr) {

            var topcoatIconText = attr.topcoatIcon;

            el.text(topcoatIconText);
            el.addClass('icomatic');

// If font-face is not supported then the goal is to end up
// with html that looks like this:
//   <span topcoat-icon="next" class="icomatic">
//     <span class="icomatic-alt">next</span>
//   </span>

            if (!fontfaceSupported) {
                el.html('<span class="icomatic-alt">' + topcoatIconText + '</span>' + fallbacks[topcoatIconText]);
            }
        }
    };
});