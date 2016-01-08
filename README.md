# jQuery seAccordion #

jquery.seAccordion is a lightweight accordion plugin for jQuery.
It allows you to create classical accordion with a header and a content.

Requirements
-----
[jQuery](http://www.jquery.com) (>= 1.7)

Usage
-----

### Step 1: Call the JS lib ###
First, include the jQuery library (by downloading it or calling it from CDN).  
Next, download the package from this site and link the accordion JavaScript file.

```html
<!-- jQuery library (served from Google CDN) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<!-- accordion Javascript file -->
<script src="/js/jquery.seaccordion.min.js"></script>
```

### Step 2: Create HTML markup ###
Create a `<div class="accordion">` tag with `<h1>` used as headers and `<div>` used as contents.

```html
<div class="accordion">
    <h1>Title 1</h1>
    <div>Content 1</div>
    <h1>Title 2</h1>
    <div>Content 2</div>
</div>
```

### Step 3: Call the plugin ###

```javascript
$(document).ready(function() {
    $('.accordion').seAccordion();
});
```

Options
-----
- **header**  
The header tag selector.  
*default: 'h1'*

- **content**  
The content tag selector.  
*default: 'div'*

- **speed**  
The slideUp/Down speed.  
*default: 'slow'*  
*Possible values: 'slow', 'fast' or numeric value*

- **easing**  
The animation easing.  
*default: 'swing'*  
*Possible values: 'swing' or 'linear'*

- **singleOpen**  
Opens a single accordion element at the same time.  
*default: true*

- **allowAllClosed**  
allow to close all contents even if singleOpen is set to true.  
*default: false*

- **triggerEvent**  
The trigger action.  
*default: 'click'*  
*Possible values: 'click' or 'mouseover'*

Make some contents visible on page load
-----
If you wish to make some of your contents visible on page load you just have to add the class **opened** to your content tag.

```html
<div class="accordion">
    <h1>Title 1</h1>
    <div>Content 1</div>
    <h1>Title 2</h1>
    <div class="opened">Content 2</div>
</div>
```
