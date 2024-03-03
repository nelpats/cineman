const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

const authService = {
  /**
   * Inscription d'un nouvel utilisateur
   * @param {Object} userData Les données de l'utilisateur (username, email, password)
   */
  async signup(userData) {
    try {
      // Hashage du mot de passe
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
      
      // Création de l'utilisateur
      const user = await User.create({
        ...userData,
        password: hashedPassword,
      });

      // Retourner l'utilisateur créé (sans le mot de passe)
      const { password, ...userWithoutPassword } = user.dataValues;
      return userWithoutPassword;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Authentification d'un utilisateur
   * @param {String} email L'email de l'utilisateur
   * @param {String} password Le mot de passe de l'utilisateur
   */
  async login(email, password) {
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw new Error('Utilisateur non trouvé');
      }

      // Vérification du mot de passe
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error('Mot de passe incorrect');
      }

      // Génération du JWT
      const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });

      // Retourner le token
      return token;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = authService;

