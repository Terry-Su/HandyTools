import { Controller as SuperController } from '../../../__share/controller/nodeProjectsShareController.js'
import vueWebpackConfig from '../../../__share/nodeWebpackConfig/vueWebpackConfig'
import FS from 'fs'
import PATH from 'path'


export class Controller extends SuperController {
  webpackBasicConfig = vueWebpackConfig

}

export default new Controller()