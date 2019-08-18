userCtrl = {}

const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({status: 200, users})
    } catch (e) {
        res.json({status: 500, message: e})
    }
}

userCtrl.createUser = async (req, res) => {
    console.log(req.body)
    try {
        const { username } = req.body
        const newUser = new User({
            username
        })
        await newUser.save()
        res.json({status: 200, message: 'user created' })
    } catch (e) {
        res.json({status: 500, message: e })
    }
}

userCtrl.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({status: 200, message: 'user Deleted' })
    } catch (e) {
        res.json({status: 500, message: e })
    }
}

module.exports = userCtrl

