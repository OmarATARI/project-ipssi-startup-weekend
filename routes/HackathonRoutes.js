module.exports = (app) => {
    const pageController = require('../controllers/pageController');

    // formulaire d'inscription et enregistrement
    app.route('/')
  .get(pageController.displayForm)
  .post(pageController.registerProject);

    // affichage des projets
    app.route('/projects')
  .get(pageController.displayAll);

};
