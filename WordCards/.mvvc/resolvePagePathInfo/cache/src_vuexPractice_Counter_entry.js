
import PATH from 'path'
import execWebpack from '../../execWebpack'
import { Controller as SuperController } from '../../../src/vuexPractice/Counter/controller/index.node.js'


export class Controller extends SuperController {
  watchWebByWebpack = () => {
    const { webpackBasicConfig } = new SuperController()
    const webpackConfig = Object.assign(
      webpackBasicConfig,
      {
        entry: PATH.resolve(process.cwd(), 'src/vuexPractice/Counter/controller/entry.js'),
        output: {
          path: PATH.resolve(process.cwd(), 'public/vuexPractice/Counter'),
          filename: 'bundle.js',
        }
      }
    )
    
     execWebpack(webpackConfig)
  }
}

export default new Controller()
  