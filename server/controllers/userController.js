const authService = require('../services/authService');

const userController = {
  /**
   * Inscription d'un nouvel utilisateur
   * @param {Object} request La requête Hapi
   * @param {Object} h La réponse Hapi
   */
  async signup(request, h) {
    try {
      const userData = request.payload;
      const user = await authService.signup(userData);
      
      // Retourner l'utilisateur créé avec un statut 201 (Created)
      return h.response(user).code(201);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  },

  /**
   * Authentification d'un utilisateur
   * @param {Object} request La requête Hapi
   * @param {Object} h La réponse Hapi
   */
  async login(request, h) {
    try {
      const { email, password } = request.payload; // Récupération de l'email et du mot de passe depuis le corps de la requête
      const token = await authService.login(email, password);
      
      // Retourner le JWT avec un statut 200 (OK)
      return h.response({ token }).code(200);
    } catch (error) {
      // Gérer les erreurs d'authentification
      return h.response({ error: error.message }).code(401); // 401 Unauthorized
    }
  },
};

module.exports = userController;

