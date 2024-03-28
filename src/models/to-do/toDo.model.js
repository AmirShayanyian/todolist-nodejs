const { Schema, model } = require('mongoose');

const toDoSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: {
      type: String,
      max: [250, 'To-Do description cannot be more than 250 characters !'],
    },
    isDone: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);

const toDoModel = model('todo', toDoSchema);

module.exports = toDoModel;
