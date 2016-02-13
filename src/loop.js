export default ({update, render, fps = 1000 / 60} = {}) => {
  let errorType = null
  let state = {
    mode: 'stopped',
    startTime: new Date().getTime(),
    timeSinceLastUpdate: 0,
    frameTime: fps
  }

  if (!update && !render) {
    errorType = 'You must declare an update and a render function when creating a new loop'
  } else if (!update) {
    errorType = 'You must declare an update function when creating a new loop'
  } else if (!render) {
    errorType = 'You must declare a render function when creating a new loop'
  }

  if (errorType) {
    throw new Error(errorType)
  }

  const tick = (timestamp) => {
    window.requestAnimationFrame((rafTimestamp) => {
      tick(rafTimestamp)
    })

    const timePassed = new Date().getTime() - state.startTime
    const delta = timestamp - timePassed

    state.timeSinceLastUpdate += delta

    if (state.timeSinceLastUpdate >= state.frameTime) {
      update(state.timeSinceLastUpdate)
      state.timeSinceLastUpdate = 0
    }

    render()
  }

  return Object.create({
    start: () => {
      state.mode = 'playing'
      state.startTime = new Date().getTime()
      state.timeSinceLastUpdate = 0
      tick(0)
      return this
    },
    stop: () => {
      state.mode = 'stopped'
      return this
    },
    pause: () => {
      state.mode = 'paused'
      return this
    }
  })
}
