import App from './src/App'

try {
  $.strict = true
  const window: Window =
    thisObj === $.global ? new Window('window') : (thisObj as unknown as Window)

  window.minimumSize = window.maximumSize = window.size = window.preferredSize = [640, 360]
  window.margins = window.spacing = 0
  window.alignChildren = ['fill', 'fill']
  App(window)

  if (thisObj === $.global) {
    window.text = 'My App'
    window.show()
    window.center()
  } else {
    window.layout.layout(true)
    window.layout.resize()
  }

  window.update()
} catch (err) {
  switch (err) {
    case 1:
      alert('')
      break
    default:
      alert([(err as Error).message, (err as Error).line, $.stack].join('\n'))
      break
  }
} finally {
  $.strict = false
  $.gc()
}
