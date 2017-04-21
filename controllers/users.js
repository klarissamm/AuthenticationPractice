// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjoiV8OOw509P8Ozw4PCocOKwqbCqVoiLCJpYXQiOjE0NzMxNzQ4NDUsImV4cCI6MTQ3MzI2MTI0NX0.VeBrh-s0LwYWPd2ZYf_Q9XzuLfFxz7S3GZFpvZ3MFn4

module.exports = {
  index: usersIndex
};

const User = require('../models/user');

function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json({ users });
  });
}
