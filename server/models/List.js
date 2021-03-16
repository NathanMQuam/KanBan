import mongoose from 'mongoose'
const Schema = mongoose.Schema

const List = new Schema({
  name: { type: String, required: true },
  creatorId: { type: String, ref: 'Profile', required: true },
  description: { type: String, required: false }

})

export default List
