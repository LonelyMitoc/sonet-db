const { Schema, model } = require('mongoose');
const userSchema = require('./Users');
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
  }
);