lb-loop
=======

[![Build Status](https://travis-ci.org/littleball-games/lb-loop.svg?branch=master)](https://travis-ci.org/littleball-games/lb-loop)
[![npm](https://img.shields.io/npm/v/lb-loop.svg)](https://npmjs.org/package/lb-loop)
[![downloads](https://img.shields.io/npm/dm/lb-loop.svg)](https://npmjs.org/package/lb-loop)

A loop library for makeing JavaScript simulations

```javascript
import loop from 'lb-loop'

loop({
  update: () => { /* ... */ }
  render: () => { /* ... */ }
}).start()
```
