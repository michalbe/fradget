# fradget

## Basic usage

```html
<!-- widget.html -->
<div class="container">
  <h1></h1>
  <div></div>
</div>
```

```javascript
var widget = new Fradget('widget.html', {
  data: {
    '.container h1': 'My Title',
    '.container div': 'Lorem hipsum...'
  }
});

document.body.appendChild(widget);
```

```html
<!-- generated output -->
<body>
  <div class="container">
    <h1>My Title</h1>
    <div> Lorem hipsum... </div>
  </div>
</body>
```

Moar examples:
 * [[DOM properties]]
 * [[Observables]]
