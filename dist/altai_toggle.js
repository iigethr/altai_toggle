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
      var action, close, log, settings, status, wrapper;
      var object = $(this);

      // Default settings
      settings = {
        easing: "linear",
        effect: "slide",
        hide: true,
        klass: ".altai-toggle-trigger",
        speed: "fast",
        close: true,
        wrapper: true,
        wrapperKlass: "altai-toggle-wrapper",
        wrapperFloat: "right",
        wrapperWidth: 300,
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

      // Wrapper
      wrapper = function() {
        if (settings.wrapper === true) {
          object.wrap( "<div class='" + settings.wrapperKlass + "'></div>" );
          object.css({
            "width"     : settings.wrapperWidth + "px"
          });
          $("." + settings.wrapperKlass).css({
            "display"   : "block",
            "float"     : settings.wrapperFloat,
            "overflow"  : "hidden",
            "width"     : settings.wrapperWidth + "px"
          });
          return;
        }
      };

      // If object found run actions
      if (object.length > 0) {
        return this.each(function(event) {
          status();
          action();
          close();
          wrapper();
          log("Altai toggle activated");
        });
      }
    }
  });
})(jQuery, window, document);
