const { Schema, model } = require('mongoose');

const toDoSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
      max: [250, 'To-Do description cannot be more than 250 characters !'],
    },
    isDone: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const toDoModel = model('todo', toDoSchema);

module.exports = toDoModel;
