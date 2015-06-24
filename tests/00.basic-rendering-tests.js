/* global $, ok, test, equal, Fg */
'use strict';
module('basic rendering test',{
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
  }
});

test('render simple model in HTML', function() {
  this.widget = new Fg('widget-name', {
    data: {
      title: 'Test title',
      content: 'test content'
    }
  });

  this.widget.data.title.bindTo('h1');
  this.widget.data.content.bindTo('div.content');

  equal(this.$qf.find('h1').html(), 'Test title',
    'Title was properly rendered in HTML'
  );
  equal(this.$qf.find('div.content').html(), 'test content',
    'Content was properly rendered in HTML'
  );
});

test('render more than one widget at the time', function() {
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

  $.each(this.$qf.find('h1'), function(i, el){
    equal($(el).html(), 'Test title',
      'Title was properly rendered in widget ' + (i+1)
    );
  });

  $.each(this.$qf.find('div.content'), function(i, el){
    equal($(el).html(), 'test content',
      'Content was properly rendered in widget ' + (i+1)
    );
  });
});

test('bindings with multiple selectors', function() {
  this.$qf.empty().append(
    $('<div data-fg="widget-name">' +
      '<h1></h1>' +
      '<div class="test-h1"></div>' +
    '</div>')
  );

  this.widget = new Fg('widget-name', {
    data: {
      title: 'Test title',
      content: 'test content'
    }
  });

  this.widget.data.title.bindTo('h1, div.test-h1');

  equal(this.$qf.find('h1').html(), 'Test title',
    'Title was properly rendered with first selector'
  );

  equal(this.$qf.find('div.test-h1').html(), 'Test title',
    'Title was properly rendered with second selector'
  );
});


test('append another widget from already created widget', function() {
  this.widget = new Fg('widget-name', {
    data: {
      title: 'Test title',
      content: 'test content'
    }
  });

  this.widget.data.title.bindTo('h1');
  this.widget.data.content.bindTo('div.content');

  this.$qf[0].appendChild(this.widget.element);

  equal(this.$qf.find('h1').length, 2,
    'Second widget was appended to the DOM '
  );

  this.$qf[0].appendChild(this.widget.element);

  equal(this.$qf.find('h1').length, 3,
    '3rd widget was appended to the DOM '
  );

  $.each(this.$qf.find('h1'), function(i, el){
    equal($(el).html(), 'Test title',
      'Title was properly rendered in widget ' + (i+1)
    );
  });

  $.each(this.$qf.find('div.content'), function(i, el){
    equal($(el).html(), 'test content',
      'Content was properly rendered in widget ' + (i+1)
    );
  });
});
