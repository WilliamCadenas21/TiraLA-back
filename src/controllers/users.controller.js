userCtrl = {}

userCtrl.getUsers = (res, resp) => res.json({message: 'all users'})

userCtrl.createUser = (res, resp) => res.json({message: 'create one user'})

userCtrl.deleteUser = (res, resp) => res.json({message: 'delete users'})

module.exports = userCtrl