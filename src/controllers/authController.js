const authService = require('../services/authService')

class AuthController {
    async register(req, res) {
        try {
            const{ name, email, password} = req.body;
            const result = await authService.register(name, email, password)
            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({message : error.message})
        }
    }
    async login(req, res) {
        try {
            const {email, password} = req.body;
            const result = await authService.login(email, password)
            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({message : error.message})
        }
    }
}

module.exports = new AuthController();