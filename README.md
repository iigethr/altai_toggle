# Altai Toggle
Slide or Fade toggle elements.

## Installation

###### NPM
```
npm i altai_toggle
```

###### Yarn
```
yarn add altai_toggle
```

###### Ruby on Rails
Add this line to your application.js
```
//= require altai_toggle/dist/altai_toggle
```

Set by using the following:
```
$(".altai-toggle").altaiToggle();
```

Settings:
```
##
easing: "linear"

## Available effect types.
effect: "slide" or "fade"

## Will trigger the toggle action.
klass: ".trigger"

## Toggle box appearance speed when triggered.
speed: "fast", "medium", "slow" or numeric value

## Hide or show toggle box on load.
hide: true or false

## Hide or not toggle box on window resize.
close: true

##
wrapper: true

##
wrapperKlass: "altai-toggle"

##
wrapperFloat: "right"

##
wrapperWidth: 300,

## Print log messages in your developer console.
debug: true or false
```



easing: "linear",
effect: "slide",
hide: true,
klass: ".altai-trigger",
speed: "fast",
close: true,
wrapper: true,
wrapperKlass: "altai-toggle",
wrapperFloat: "right",
wrapperWidth: 300,
debug: false

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
