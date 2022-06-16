const asyncHandler = require('express-async-handler');

//@desc   Get all posts
//@route  GET /api/posts
//@access Public
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Posts' });
});
//@desc   Set all posts
//@route  POST /api/posts
//@access Private
const setPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Text is required');
  }

  res.status(200).json({ message: 'Set Post' });
});

//@desc   Update Post
//@route  PUT /api/posts/:id
//@access Private
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Post ${req.params.id}` });
});

//@desc   Delete post
//@route  DELETE /api/posts/:id
//@access Private
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Post ${req.params.id}` });
});
module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
};
