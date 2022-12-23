const { User, Thought } = require('../models');

async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

async function getSingleUser(req, res) {
  try {
    const user = await User.findOne(req.params.id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

async function createUser(req, res) {
  try {
    const users = await User.create(req.body);
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
};