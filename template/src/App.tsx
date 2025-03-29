import Player from './components/Player'
import animationImages from './animationImages'
import aeLogo from './assets/AE_LOGO.png'
import rolldownLogo from './assets/ROLLDOWN_LOG.png'
import githubLogo from './assets/GITHUB_LOGO.png'
import bilibiliLogo from './assets/BILIBILI_LOG.png'
import openUrl from './func/openUrl'
import groupRes from './assets/res/group.res'

function App(parent: Container) {
  const root = parent.add(groupRes) as Group
  root.orientation = 'stack'

  const playerBg = Player(root, { fps: 24, width: 640, height: 360 })
  playerBg.onLoad(animationImages)

  const fg = root.add(groupRes) as Group
  fg.orientation = 'column'

  const title = fg.add('customview')
  title.alignment = ['center', 'center']
  title.size = [128 * 2 + 50, 128]
  title.onDraw = function () {
    this.graphics.drawImage(ScriptUI.newImage(atob(aeLogo)), 0, 0, 128, 128)
    this.graphics.drawImage(ScriptUI.newImage(atob(rolldownLogo)), 128 + 50, 0, 128, 128)
  }

  const centerGroup = fg.add(groupRes) as Group
  centerGroup.margins = 15
  const p = centerGroup.add('customview')
  const str = 'ESTK + Rolldown'
  const pFont = ScriptUI.newFont('Arial', '', 48)
  const strWidth = p.graphics.measureString(str, pFont)[0]
  p.alignment = 'center'
  p.size = [strWidth + pFont.size * str.length, pFont.size]

  p.onDraw = function () {
    this.graphics.drawString(
      str,
      this.graphics.newPen(0, [0, 0, 0], 1),
      strWidth + 30,
      -pFont.size + 2,
      pFont
    )
  }

  const bottomGroup = fg.add('group')
  bottomGroup.size = [72 * 2 + 30, 72]
  bottomGroup.alignChildren = ['center', 'fill']

  const githubBtn = bottomGroup.add('custombutton')
  githubBtn.size = [72, 72]
  githubBtn.onDraw = function () {
    this.graphics.drawImage(ScriptUI.newImage(atob(githubLogo)), 0, 0, 72, 72)
  }
  githubBtn.onClick = function () {
    openUrl('https://github.com/ae-script')
  }

  const bilibiliBtn = bottomGroup.add('custombutton')
  bilibiliBtn.size = [72, 72]
  bilibiliBtn.onDraw = function () {
    this.graphics.drawImage(ScriptUI.newImage(atob(bilibiliLogo)), 0, 0, 72, 72)
  }
  bilibiliBtn.onClick = function () {
    openUrl('https://space.bilibili.com/123456789')
  }

  let hasPlayer = false
  root.window.addEventListener('click', () => {
    if (hasPlayer) {
      playerBg.onPause()
    } else {
      playerBg.onPlay()
    }
    hasPlayer = !hasPlayer
  })
}

/**
 * You can write out the method you want to shake out
 */

export default App
