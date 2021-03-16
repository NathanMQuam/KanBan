import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BoardsService {
  async create(body) {
    return await dbContext.Board.create(body)
  }

  async getUserBoards(userId) {
    return await dbContext.Board.find({ creatorId: userId })
  }

  async getBoardById(query) {
    return await dbContext.Board.findById(query)
  }

  async deleteBoard(id, userId) {
    const post = await dbContext.Board.findOneAndRemove({ _id: id, creatorId: userId })
    if (!post) {
      throw new BadRequest('You are not the creator or Bad Id.')
    }
  }
}

export const boardsService = new BoardsService()
