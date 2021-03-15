import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService.js'
import BaseController from '../utils/BaseController.js'

export class BoardsController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .get('/:id', this.getBoardById)
      // .get('/:id/lists', this.getListsByBoardId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createBoard)
      // .put('/:id', this.editBoard)
      // .delete('/:id', this.deleteBlog)
  }

  async createBoard(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await boardsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getBoardById(req, res, next) {
    try {
      return res.send(await boardsService.getBoardsByUserId())
    } catch (error) {
      next(error)
    }
  }
}
