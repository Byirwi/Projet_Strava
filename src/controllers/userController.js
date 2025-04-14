// controlleur/userController.js

const UserService = require('../services/userService');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getallUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}