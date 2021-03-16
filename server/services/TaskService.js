import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TaskService {
  async createTask(body) {
    return await dbContext.List.create(body)
  }
}
