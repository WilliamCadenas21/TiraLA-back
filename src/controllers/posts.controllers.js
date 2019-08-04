const postCtrl = {}

postCtrl.getPosts = (req, res) => res.json({message: 'GET request'})

postCtrl.createPost = (req, res) => res.json({message: 'POST request'})

postCtrl.getPost =(req, res) => res.json({message: 'GET one'})

postCtrl.updatePost = (req, res) => res.json({message: 'Update request'})

postCtrl.deletPost = (req, res) => res.json({message: 'Delte request'})



module.exports = postCtrl