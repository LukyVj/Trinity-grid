# Trinity-grid
Because we mostly doesn't need to have up to 12 columns

## Usage 

#### 1 Download 
First of all, grab the latest version of [trinity.css]()

#### 2 Load
Now, load the style right before your `</head>` closing tag: 

```html
<html>
  <head>
    <title>My awesome website</title>
    <link rel="stylesheet" type="text/css" href="trinity.css" />
</html>
```
#### 3 prepare the frame
In order to create a Trinity grid, you have to define the trinity frame. 
The best way is to use the body tag, and give it a trinity class :
```html 
<body class="trinity">...</body>
```

#### 4 Use the grid
Then you can use the grid : 

```html
<div class="t-1"></div>

<div class="t-2"></div>
<div class="t-2"></div>

<div class="t-3"></div>
<div class="t-3"></div>
<div class="t-3"></div>
```