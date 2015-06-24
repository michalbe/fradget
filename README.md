# fradget

## Basic usage

### Create simple widget

```html
<!-- index.html -->
<body>
  <div data-fg="widget-name">
    <h1></h1>
    <div class="content"></div>
  </div>
</body>
```

```javascript
var widget = new Fg('widget-name', {
  data: {
    title: 'My Title',
    content: 'Lorem hipsum...'
    }
  }
});

widget.data.title.bindTo('h1');
widget.data.content.bindTo('div.content');
```

```html
<!-- generated output -->
<body>
  <div>
    <h1>My Title</h1>
    <div class="content">Lorem hipsum...</div>
  </div>
</body>
```

### Same widget in different places

```javascript
document.body.appendChild(widget.element);
```

```html
<body>
  <div>
    <h1>My Title</h1>
    <div class="content">Lorem hipsum...</div>
  </div>
  <div>
    <h1>My Title</h1>
    <div class="content">Lorem hipsum...</div>
  </div>
</body>
```

### Data Bingings
```javascript
widget.data.title = 'New Title';
```
```html
<body>
  <div>
    <h1>New Title</h1>
    <div class="content">Lorem hipsum...</div>
  </div>
  <div>
    <h1>New Title</h1>
    <div class="content">Lorem hipsum...</div>
  </div>
</body>
```

### HTML attributes

```html
<!-- index.html -->
<body>
  <div data-fg="widget-name">
    <input type="checkbox" class="agreed"></input>
  </div>
</body>
```

```javascript
var widget = new Fg('widget-name', {
  data: {
    title:  'My Title',
    checkboxStatus: false
  }
});

widget.data.title.bindTo('h1');
widget.data.checkboxStatus.bindToAttribute('input', 'checked');
```

```html
<!-- generated output -->
<body>
  <div>
    <input type="checkbox" class="agreed" checked="false">My Checkbox</input>
  </div>
</body>
```

```javascript
// data binding with attributes
widget.data.checkboxStatus = true;
```

```html
<!-- generated output -->
<body>
  <div>
    <h1>My Title</h1>
    <input type="checkbox" class="agreed" checked="true">My Checkbox</input>
  </div>
</body>
```
