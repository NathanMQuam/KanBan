import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BoardsService {
  async create(body) {
    return await dbContext.Board.create(body)
  }

  async getBoardsByUserId(query = {}) {
    return await dbContext.Board.find(query)
  }

  async deleteBoard(id, userId) {
    const post = await dbContext.Board.findOneAndRemove({ _id: id, creatorId: userId })
    if (!post) {
      throw new BadRequest('You are not the creator or Bad Id.')
    }
  }
}

export const boardsService = new BoardsService()
