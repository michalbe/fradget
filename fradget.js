/* exported Fg */
'use strict';

var buildProperty = function(obj, propertyName, propertyValue, widget){
  var _selector;
  Object.defineProperty(obj, propertyName, {
    get: function(){
      return {
        bindTo: function(selector) {
          _selector = selector;
          this.element = widget.querySelector(selector);
          this.element.innerHTML = propertyValue;
        }
      };
    }
  });
};

var Fg = function(name, options){
  var widget = document.querySelector('[data-fg="' + name + '"]');
  var data = {};
  for (var option in options.data) {
    buildProperty(data, option, options.data[option], widget);
  }

  //widget = widget.cloneNode(true);
  widget.data = data;
  Object.defineProperty(widget, 'element', {
    get: function(){
      return widget.cloneNode(true);
    }
  });

  return widget;
};
