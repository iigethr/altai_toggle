/*
 * Name: altai_toggle
 * Title: Altai Toggle
 * Description: Slide or Fade toggle elements.
 *
 */

// jQuery
var jQuery;

(function($, window, document) {
  return $.fn.extend({
    altaiToggle: function(options) {
      // Variables
      var action, close, log, settings, status;
      var object = $(this);

      // Default settings
      settings = {
        easing: "linear",
        effect: "slide",
        hide: true,
        klass: ".altai-trigger",
        speed: "fast",
        close: true,
        debug: false
      };
      settings = $.extend(settings, options);

      // Log
      log = function(message) {
        if (settings.debug) {
          if (typeof ((console === "undefined") && (console === null))) {
            return console.log(message);
          } else {
            return undefined;
          }
        } else {
          return undefined;
        }
      };
      // Status
      status = function() {
        if (settings.hide === true) {
          return object.hide(0);
        } else {
          return object.show(0);
        }
      };

      // Action
      action = function() {
        $(settings.klass).each(function() {
          $(this).unbind().on("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (settings.effect === "slide") {
              return object.slideToggle(settings.speed, settings.easing);
            } else if (settings.effect === "fade") {
              return object.fadeToggle(settings.speed, settings.easing);
            }
          });
        });
      };

      // Close
      close = function() {
        var width;
        width = $(window).width();
        $(window).resize(function() {
          var set, calculate;
          set = settings.close === true;
          calculate = $(window).width() !== width;
          if (set && calculate) {
            return object.hide(0);
          }
        });
        $(document).click( function(){
          return object.hide(0);
        });
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function(event) {
          status();
          action();
          if (settings.close === true) {
            close();
          }
          log("Altai Toggle Activated");
        });
      }
    }
  });
})(jQuery, window, document);
