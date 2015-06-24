/* global $, ok, test, equal, Fg */
'use strict';
module('data binding with DOM attributes test',{
  setup:function() {
    this.widget = '';
    // Prepare proper HTML for the plugin
    this.$qf = $('#qunit-fixture');
    this.$qf.append(
      $('<div data-fg="widget-name">' +
        '<h1></h1>' +
      '</div>')
    );

    this.widget = new Fg('widget-name', {
      data: {
        title: 'Test title',
        id: 'main-header'
      }
    });

    this.widget.data.title.bindTo('h1');
    this.widget.data.id.bindToAttribute('h1', 'id');
  }
});

test('data propagation with DOM attributes', function() {
  equal(this.$qf.find('h1').html(), 'Test title',
    'Title was properly rendered in HTML'
  );
  equal(this.$qf.find('h1').attr('id'), 'main-header',
    'DOM attributes were properly rendered in HTML'
  );

  this.widget.data.id = 'not-so-main-header';

  equal(this.$qf.find('h1').attr('id'), 'not-so-main-header',
    'DOM attribute change was properly propagated in HTML'
  );

});
