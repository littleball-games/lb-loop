import tape from 'tape'
import loop from './loop'

tape('loop should be a function', (test) => {
  test.plan(1)

  test.equal(typeof loop, 'function')
})

tape('loop should require an update and render to be supplied', (test) => {
  test.plan(1)

  test.throws(() => {
    loop()
  })
})

tape('loop should require an update function to be supplied', (test) => {
  test.plan(1)

  test.throws(() => {
    loop({
      render: () => {}
    })
  })
})

tape('loop should require a render function to be supplied', (test) => {
  test.plan(1)

  test.throws(() => {
    loop({
      update: () => {}
    })
  })
})

tape('loop object', (test) => {
  test.plan(4)

  const l = loop({
    update: () => {},
    render: () => {}
  })

  test.equal(typeof l, 'object', 'loop should return an object is called successfully')
  test.equal(typeof l.start, 'function', 'start should be a function')
  test.equal(typeof l.stop, 'function', 'stop should be a function')
  test.equal(typeof l.pause, 'function', 'pause should be a function')
})
