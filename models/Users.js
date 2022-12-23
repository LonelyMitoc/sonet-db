const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts');

const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function(e) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e);
        },
        message: props => `${props.value} is not a valid email.`
      },
    },
    thoughts: [
      {
        type: ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;