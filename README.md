#react-caard

> A lightweight carousel made in React and optimized for mobile.

[![codecov](https://codecov.io/gh/housinghq/react-caard/branch/master/graph/badge.svg)](https://codecov.io/gh/housinghq/react-caard)
[![Build Status](https://travis-ci.org/housinghq/react-caard.svg?branch=master)](https://travis-ci.org/housinghq/react-caard)
[![npm](https://img.shields.io/npm/v/react-caard.svg?maxAge=2592000)](https://github.com/housinghq/react-caard)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/housinghq/react-caard/master/LICENSE.md)


Demo is available [here](https://housinghq.github.io/react-caard).

## Installation
```
npm install --save react-caard
```

## Basic Usage
**JSX**:
```js
import Caard from 'react-caard';

<Caard image="b.jpg" autoLoad={true} defaultimage="default2.jpg">Text 2</Caard>
```
**CSS**
```css
@import "react-caard/dist/slide"
```

## Options

prop|default|description
----|-------|-----
className|string|custom classname for Caard component
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
const a = <Caard image="a.jpg" defaultImage="default1.jpg">Text 1</Caard>
a.load() // now image will be loaded

// Alternatively set `autoLoad` to true. So `a.jpg` will automatically replace
// default1.jpg when it is loaded.
<Caard image="a.jpg" defaultImage="default1.jpg" autoLoad={true}>Text 1</Caard>
```

### Development
```
git clone https://github.com/housinghq/react-caard
cd react-caard
npm install
npm run storybook
```

Open an issue before opening a PR. This package is optimised for mobile so its hard to include all the features.

###License
MIT @ Loconsolutions
