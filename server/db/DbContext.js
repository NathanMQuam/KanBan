import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import BoardSchema from '../models/Board'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Board = mongoose.model('Board', BoardSchema)
}

export const dbContext = new DbContext()
