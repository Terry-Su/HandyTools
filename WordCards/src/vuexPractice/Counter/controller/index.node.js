import { Controller as SuperController } from '../../__share/controller/nodePagesShareController'
import body from './body.html'


export class Controller extends SuperController {
  body = body
}

export default new Controller()