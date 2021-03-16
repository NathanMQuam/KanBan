import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async createTask(body) {
    return await dbContext.Task.create(body)
  }

  async getTasksByListId(id) {
    return await dbContext.Task.find(id).populate('listId', 'name')
  }

  async getTasksByBoardId(id) {
    return await dbContext.Task.find(id).populate('boardId', 'name')
  }

  async deleteTask(id, userId) {
    const post = await dbContext.Task.findOneAndRemove({ _id: id, creatorId: userId })
    if (!post) {
      throw new BadRequest('You are not the CREATOR or BAD ID.')
    }
  }
}

export const tasksService = new TasksService()
