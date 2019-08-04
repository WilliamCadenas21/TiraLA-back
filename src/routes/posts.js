const { Router } = require('express')
const router = Router()
const { getPosts, createPost,
getPost, deletPost, updatePost } = require('../controllers/posts.controllers')

router.route('/')
    .get(getPosts)
    .post(createPost)

router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletPost)

module.exports = router