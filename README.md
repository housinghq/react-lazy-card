#react-lazy-slide

> A lightweight carousel made in React and optimized for mobile.

[![codecov](https://codecov.io/gh/housinghq/react-lazy-slide/branch/master/graph/badge.svg)](https://codecov.io/gh/housinghq/react-lazy-slide)
[![Build Status](https://travis-ci.org/housinghq/react-lazy-slide.svg?branch=master)](https://travis-ci.org/housinghq/react-lazy-slide)
[![npm](https://img.shields.io/npm/v/react-lazy-slide.svg?maxAge=2592000)](https://github.com/housinghq/react-lazy-slide)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/housinghq/react-lazy-slide/master/LICENSE.md)



Demo is available [here](https://housinghq.github.io/react-lazy-slide).

## Installation
```
npm install --save react-lazy-slide
```

## Basic Usage
**JSX**:
```js
import Slide from 'react-lazy-slide';

<Slide image="b.jpg" autoLoad={true} defaultimage="default2.jpg">Text 2</Slide>
```
**CSS**
```css
@import "react-lazy-slide/dist/slide"
```

## Options

prop|default|description
----|-------|-----
className|string|custom classname for Slide component
image|string|final image to be loaded
defaultImage|string|pre-loader image to be shown
autoLoad|false|should the component automatically lazyLoad the image
attributes| {} | Additional attributes for component root
title| '' | serves like `alt` attribute for `img` tag
lazyLoad|true|enable/disable lazy load

#### .load()
If `autoload` is set to false the you have to manually call `.load()` to load the image

```js
// This will not load `image` automatically. Will load default1.jpg
const a = <Slide image="a.jpg" defaultImage="default1.jpg">Text 1</Slide>
a.load() // now image will be loaded

// Alternatively set `autoLoad` to true. So `a.jpg` will automatically replace
// default1.jpg when it is loaded.
<Slide image="a.jpg" defaultImage="default1.jpg" autoLoad={true}>Text 1</Slide>
```

### Development
```
git clone https://github.com/housinghq/react-lazy-slide
cd react-lazy-slide
npm install
npm run storybook
```

Open an issue before opening a PR. This package is optimised for mobile so its hard to include all the features.

###License
MIT @ Loconsolutions
