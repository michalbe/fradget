/* global Fg */

'use strict';

var widget = new Fg('widget-name', {
  data: {
    title: 'My Title',
    content: 'Lorem hipsum...'
  }
});

widget.data.title.bindTo('h1');
widget.data.content.bindTo('div.content');

document.body.appendChild(widget.element);


widget.data.title = 'New Title';
