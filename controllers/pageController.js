//const Page = require('../models/blockModel');
//const blockchainApiProvider = require('../providers/blockchainApiProvider');

exports.displayForm = (req, res) => {
   /* Page.find({}, (err, block) => {
        if(err)  {
            res.status(400);
            res.json({err: 'fail'});
        } else {
            res.json(block);
        }

    })*/
   res.render('../views/index');
};