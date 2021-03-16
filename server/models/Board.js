import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Board = new Schema({
  name: { type: String, required: true },
  creatorId: { type: String, ref: 'Profile', required: true },
  description: { type: String, required: false },
  collaborators: [{ type: String, required: false }]
},
{ timestamps: true, _id: true, toJSON: { virtuals: true } })

Board.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

// NOTE: Board.pre() for cascading delete goes here

export default Board
