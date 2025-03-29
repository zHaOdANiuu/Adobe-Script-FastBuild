interface PlayerOConfig {
  fps: number
  width: number
  height: number
}

function Player(parent: Container, config: PlayerOConfig) {
  let handler = 0
  let currentFrame = 0
  let framesLength = 0
  const view = parent.add('image')
  return {
    onLoad(sequenceFrames: ScriptUIImage[]) {
      framesLength = sequenceFrames.length
      view.size = [config.width, config.height]
      view.onDraw = function () {
        this.graphics.drawImage(sequenceFrames[currentFrame], 0, 0, config.width, config.height)
      }
    },
    onPlay() {
      handler = app.scheduleTask(
        `if (currentFrame < framesLength) {
          ++currentFrame;
          view.notify('onDraw');
        } else {
          currentFrame = 0;
        }`,
        1000 / config.fps,
        true
      )
    },
    onPause() {
      clearInterval(handler)
    }
  }
}

export default Player
