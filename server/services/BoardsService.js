import { dbContext } from '../db/DbContext'

class BoardsService {
  async create(body) {
    return await dbContext.Board.create(body)
  }

  async getBoardsByUserId(query = {}) {
    return await dbContext.Board.find(query)
  }
}

export const boardsService = new BoardsService()
