import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'
import cac from 'cac'

const baseUrl = 'https://api.github.com/repos/zHaOdANiuu/AdobeScriptTemplate/contents/'
const headers = {
  Authorization: 'application/vnd.github.v3+json',
  'User-Agent': 'zHaOdANiuu'
}
const downloadFile = async (url, filepath) => {
  try {
    const res = await fetch(url, { method: 'GET', headers })
    const buffer = Buffer.from(await res.arrayBuffer())
    fs.mkdirSync(path.dirname(filepath), { recursive: true })
    fs.writeFileSync(filepath, buffer)
  } catch (err) {
    console.error(`Failed to download ${url}:`, err)
  }
}
const build = (dirUrl, rootPath) => {
  return fetch(dirUrl, { method: 'GET', headers })
    .then(res => res.json())
    .then(data =>
      Promise.all(
        data.map(item =>
          item.type === 'dir'
            ? build(item.url, path.resolve(path.join(rootPath, item.name)))
            : downloadFile(item.download_url, path.resolve(path.join(rootPath, item.name)))
        )
      )
    )
    .catch(err => {
      console.error(`Failed to process directory ${dirUrl}:`, err)
    })
}

const createProject = (p, t) => {
  fs.mkdirSync(p)
  switch (t) {
    case 'ae':
      build(baseUrl + 'template-ae', p)
      break
    case 'pr':
    case 'ps':
    case 'ai':
    case 'an':
      console.log('Not supported yet')
      break
  }
}
const actionCreateCallback = (dir, options) => {
  console.log(String.raw`Adobe Script Fast Build
███████╗███████╗████████╗██╗  ██╗██████╗ ██╗   ██╗██╗██╗     ██████╗ 
██╔════╝██╔════╝╚══██╔══╝██║ ██╔╝██╔══██╗██║   ██║██║██║     ██╔══██╗
█████╗  ███████╗   ██║   █████╔╝ ██████╔╝██║   ██║██║██║     ██║  ██║
██╔══╝  ╚════██║   ██║   ██╔═██╗ ██╔══██╗██║   ██║██║██║     ██║  ██║
███████╗███████║   ██║   ██║  ██╗██████╔╝╚██████╔╝██║███████╗██████╔╝
╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝`)
  const fullPath = path.resolve(dir)
  try {
    if (fs.existsSync(fullPath)) {
      console.log('The directory already exists, do you want to delete it?')
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })
      rl.question('Enter y to confirm, and vice versa.(y/n)', answer => {
        if (answer.toLowerCase() === 'n') {
          console.log('Aborted')
        } else {
          fs.rmSync(fullPath, { recursive: true, force: true })
          createProject(fullPath, options.template)
        }
        rl.close()
      })
    } else {
      createProject(fullPath, options.template)
    }
  } catch (error) {
    console.error(error)
    rl.close()
  }
}

const cli = cac('adobe-script-fast-build')
cli
  .command('create <dir>', 'create a new project')
  .option('-t, --template <template>', 'specify a template')
  .action(actionCreateCallback)

cli.version('0.0.1')
cli.help()
cli.parse()
