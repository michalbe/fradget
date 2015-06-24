/* exported Fg */
'use strict';
window['Fg'] = (function(){

  var makeArray = function(obj){
    return Array.prototype.slice.call(obj);
  };

  //document.querySelectorAll('[data-fg="' + name + '"]');
  var buildProperty = function(obj, propertyName, propertyValue, widgetName){
    var _selector;
    var _attribute;
    var _widgetName;
    Object.defineProperty(obj, propertyName, {
      get: function(){
        var bind = function(selector, attribute) {
          _selector = selector;
          _attribute = attribute;
          _widgetName = widgetName;

          var widgets = makeArray(
            document.querySelectorAll('[data-fg="' + widgetName + '"]')
          );
          widgets.forEach(function(widget){
            var elements = makeArray(
              widget.querySelectorAll(selector)
            );
            elements.forEach(function(element){
              element[_attribute || 'innerHTML'] = propertyValue;
            });
          });
        };
        return {
          bindToAttribute: bind,
          bindTo: bind
        };
      },
      set: function(value) {
        var widgets = makeArray(
          document.querySelectorAll('[data-fg="' + _widgetName + '"]')
        );
        widgets.forEach(function(widget){
          var elements = makeArray(
            widget.querySelectorAll(_selector)
          );
          elements.forEach(function(element) {
            element[_attribute || 'innerHTML'] = value;
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
