import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'
import { taskService } from '../services/TaskService'

export class TaskController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/', this.createTask)
  }

  async createTask(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      return res.send(await taskService.createList(req.body))
    } catch (error) {
      next(error)
    }
  }
}
