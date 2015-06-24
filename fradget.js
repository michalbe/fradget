/* exported Fg */
'use strict';

var buildProperty = function(obj, propertyName, propertyValue, widget){
  Object.defineProperty(obj, propertyName, {
    get: function(){
      return {
        bindTo: function(selector) {
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
    console.log(option);
    buildProperty(data, option, options.data[option], widget);
  }

  return {
    data: data
  };
};
