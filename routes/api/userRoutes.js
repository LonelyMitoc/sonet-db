const router = require('express').Router();
// Need to bring in function from controllers
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userControllers.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getSingleUser).delete(deleteUser);

// /api/users/:id/friends/:friendId
router.route('/:id/friends/friendId').post(addFriend).delete(removeFriend);

module.exports = router;