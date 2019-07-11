module.exports = (app) => {
    const pageController = require('../controllers/pageController');

    app.route('/')
    .get(pageController.displayForm)
    .post(pageController.registerProject);

    // app.route('/project/:id')
};
