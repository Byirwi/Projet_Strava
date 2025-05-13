const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users')

class AuthService {
    async register(name,email,password){
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({name, email, password : hashedPassword});
            await user.save();
            return {message:'L\'Utilisateur a été enregistré avec succès.'};
        }catch(error) {
            throw new Error('L\'enregistrement de l\'utilisateur a échoué. Veuilliez réessayer')
        }
    }

    async login(email,password){
        try{    
            const user = await User.findOne({where:{email}});
            if (!User) {
                throw new Error('L\'authentification a échoué. Veuillez vérifier l\'adresse email');
            }

            const passwordMatch = await bcrypt.compare(password,user.password);
            if (!passwordMatch) {
                throw new Error('L\'authentification a échoue. Veuillez vérifier le mot de passe');
            }

            const token = jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn: '1h'});
            return {message:'La connexion a été effectuée avec succès', token};
        }catch(error) {
            throw new Error('Une erreur s\'est produite: ' + error.message);
        }
    }
}

module.exports = new AuthService();