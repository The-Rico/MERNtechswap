const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

//@desc   Get all posts
//@route  GET /api/posts
//@access Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
});

//@desc   Set all posts
//@route  POST /api/posts
//@access Private
const setPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Text is required');
  }
  const post = await Post.create({ text: req.body.text });

  res.status(200).json({ post });
});

//@desc   Update Post
//@route  PUT /api/posts/:id
//@access Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

//@desc   Delete post
//@route  DELETE /api/posts/:id
//@access Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  await post.remove();

  res.status(200).json({ message: `Deleted Post ${req.params.id}` });
});
module.exports = {
  getPosts,
  setPost,
  updatePost,
  deletePost,
};
