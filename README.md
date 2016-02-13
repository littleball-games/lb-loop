lb-loop
=======

[![Build Status](https://travis-ci.org/littleball-games/lb-loop.svg?branch=master)](https://travis-ci.org/littleball-games/lb-loop)

A loop library for makeing JavaScript simulations

```javascript
import loop from 'lb-loop'

loop({
  update: () => { /* ... */ }
  render: () => { /* ... */ }
}).start()
```
