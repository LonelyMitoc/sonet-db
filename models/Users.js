const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
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
    thoughts: [thoughtsSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model ('user', userSchema);

module.exports = user;