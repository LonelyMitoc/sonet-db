const { Schema, model } = require('mongoose');

const { ObjectId } = Schema.Types;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      default: new ObjectId(),
    },
    reactionBody: {
      type: String,
      maxlength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,

    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);
const Reaction = model('reaction', reactionSchema);

module.exports = { Thought, Reaction };