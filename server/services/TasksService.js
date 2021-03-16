import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async createTask(body) {
    return await dbContext.Task.create(body)
  }
}

export const tasksService = new TasksService()
