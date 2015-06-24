/* exported Fg */
'use strict';
var Fg = (function(){
  //document.querySelectorAll('[data-fg="' + name + '"]');
  var buildProperty = function(obj, propertyName, propertyValue, widgetName){
    var _selector;
    var _attribute;
    var _widgetName;
    Object.defineProperty(obj, propertyName, {
      get: function(){
        return {
          bindTo: function(selector) {
            _selector = selector;
            _widgetName = widgetName;

            var widgets = Array.prototype.slice.call(
              document.querySelectorAll('[data-fg="' + widgetName + '"]')
            );
            widgets.forEach(function(widget){
              var elements = Array.prototype.slice.call(
                widget.querySelectorAll(selector)
              );
              elements.forEach(function(element){
                element.innerHTML = propertyValue;
              });
            });
          },
          bindToAttribute: function(selector, attribute) {
            _selector = selector;
            _attribute = attribute;
            _widgetName = widgetName;

            var widgets = Array.prototype.slice.call(
              document.querySelectorAll('[data-fg="' + widgetName + '"]')
            );
            widgets.forEach(function(widget){
              var elements = Array.prototype.slice.call(
                widget.querySelectorAll(selector)
              );
              elements.forEach(function(element){
                element[attribute] = propertyValue;
              });
            });
          }
        };
      },
      set: function(value) {
        var widgets = Array.prototype.slice.call(
          document.querySelectorAll('[data-fg="' + _widgetName + '"]')
        );
        widgets.forEach(function(widget){
          var elements = Array.prototype.slice.call(
            widget.querySelectorAll(_selector)
          );
          elements.forEach(function(element) {
            element[_attribute ? _attribute : 'innerHTML'] = value;
          });
        });
      }
    });
  };

  var Fg = function(name, options){
    var fg = {};
    var data = {};
    for (var option in options.data) {
      buildProperty(data, option, options.data[option], name);
    }

    fg.data = data;
    Object.defineProperty(fg, 'element', {
      get: function(){
        return document.querySelector('[data-fg="' + name + '"]')
              .cloneNode(true);
      }
    });

    return fg;
  };

  return Fg;
})();
