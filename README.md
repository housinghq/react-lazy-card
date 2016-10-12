#react-lazy-card

> A lighweight image lazy-loading component written in React

[![codecov](https://codecov.io/gh/housinghq/react-lazy-card/branch/master/graph/badge.svg)](https://codecov.io/gh/housinghq/react-lazy-card)
[![Build Status](https://travis-ci.org/housinghq/react-lazy-card.svg?branch=master)](https://travis-ci.org/housinghq/react-lazy-card)
[![npm](https://img.shields.io/npm/v/react-lazy-card.svg?maxAge=2592000)](https://github.com/housinghq/react-lazy-card)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/housinghq/react-lazy-card/master/LICENSE.md)

It supports both manual and automatic image lazy-loading.

Demo is available [here](https://housinghq.github.io/react-lazy-card).

## Installation
```
npm install --save react-lazy-card
```

## Basic Usage
**JSX**:
```js
import lazy-card from 'react-lazy-card';

<LazyCard image="b.jpg" autoLoad={true} defaultimage="default2.jpg">Text 2</LazyCard>
```
**CSS**
```css
@import "react-lazy-card/dist/slide"
```

## Options

prop|default|description
----|-------|-----
className|string|custom classname for lazy-card component
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
const a = <LazyCard image="a.jpg" defaultImage="default1.jpg">Text 1</LazyCard>
a.load() // now image will be loaded

// Alternatively set `autoLoad` to true. So `a.jpg` will automatically replace
// default1.jpg when it is loaded.
<LazyCard image="a.jpg" defaultImage="default1.jpg" autoLoad={true}>Text 1</LazyCard>
```

### Development
```
git clone https://github.com/housinghq/react-lazy-card
cd react-lazy-card
npm install
npm run storybook
```

Open an issue before opening a PR. This package is optimised for mobile so its hard to include all the features.

###License
MIT @ Loconsolutions
