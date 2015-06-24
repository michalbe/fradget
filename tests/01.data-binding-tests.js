/* global $, ok, test, equal, Fg */
'use strict';
module('data binding test',{
  setup:function() {
    this.widget = '';
    // Prepare proper HTML for the plugin
    this.$qf = $('#qunit-fixture');
    this.$qf.append(
      $('<div data-fg="widget-name">' +
        '<h1></h1>' +
        '<div class="content"></div>' +
      '</div>')
    );

    this.widget = new Fg('widget-name', {
      data: {
        title: 'Test title',
        content: 'test content'
      }
    });

    this.widget.data.title.bindTo('h1');
    this.widget.data.content.bindTo('div.content');
  }
});

test('data population', function() {
  equal(this.$qf.find('h1').html(), 'Test title',
    'Title was properly rendered in HTML'
  );

  this.widget.data.title = 'New super title!';

  equal(this.$qf.find('h1').html(), 'New super title!',
    'Title was properly propagated & rendered in HTML'
  );
});
