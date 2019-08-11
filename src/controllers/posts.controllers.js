const postCtrl = {}

const Post = require('../models/Post')

postCtrl.getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({status: 200, posts})
    } catch (e) {
        res.json({status: 500, message: e})
    }
    
}

postCtrl.createPost = async (req, res) => {
    try {
        const { hashtag, content, author } = req.body
        const newPost = new Post({
            hashtag,
            content,
            author
        })
        await newPost.save()
        res.json({status: 200, message: 'note saved' })
    } catch (e) {
        res.json({status: 500, message: e })
    }
}

postCtrl.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json({status: 200, post})
    } catch (e) {
        res.json({status: 500, message: e })
    }

}

postCtrl.updatePost = async (req, res) => {
    try {
        const { content } = req.body
        await Post.findOneAndUpdate(req.params.id, {
            content
        })
        res.json({ status: 200, message: 'Post update' })
    } catch (e) {
        res.json({status: 500, message: e })
    }

}

postCtrl.deletPost = async (req, res) => {
    try {
        await Post.findOneAndDelete(req.params.id)
        res.json({ status: 200,message: 'Post Deleted' })
    } catch (e) {
        res.json({status: 500, message: e })
    }
}


module.exports = postCtrl