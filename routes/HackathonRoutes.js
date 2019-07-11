module.exports = (app) => {
    const pageController = require('../controllers/pageController');

    app.route('/').get(pageController.displayForm);

    /*  Possiblement une route pour l'admin

    app.route('/blocks/:blockId')
        .get(blockController.readABlock)
        .put(blockController.updateABlock)
        .delete(blockController.deleteABlock);*/
};