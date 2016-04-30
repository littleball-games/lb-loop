lb-loop
=======

[![npm](https://img.shields.io/npm/v/lb-loop.svg)](https://npmjs.org/package/lb-loop)
[![downloads](https://img.shields.io/npm/dm/lb-loop.svg)](https://npmjs.org/package/lb-loop)
[![Build Status](https://travis-ci.org/littleball-games/lb-loop.svg?branch=master)](https://travis-ci.org/littleball-games/lb-loop)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/name)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A loop library for makeing JavaScript simulations

```javascript
import loop from 'lb-loop'

const game = loop({
  update: () => { /* ... */ }
  render: () => { /* ... */ }
})

game.start()
```
