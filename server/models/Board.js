import mongoose from 'mongoose'
// import { dbContext } from '../db/DbConfig'
const Schema = mongoose.Schema

const Board = new Schema({
  name: { type: String, required: true },
  creator: { type: String, ref: 'Profile', required: true },
  description: { type: String, required: false },
  collaborators: [{ type: String, required: false }]
},
{ timestamps: true, toJSON: { virtuals: true } })

// NOTE: Board.pre() for cascading delete goes here

export default Board
