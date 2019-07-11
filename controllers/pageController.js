//import de mongoose
const mongoose = require('mongoose');

// récupération du modèle schéma via le modèle
const Project = require('../models/projectModel');

exports.displayForm = (req, res) => {
   //res.render('../views/index');
    Project.find({}, (err, project) => {
    if(err) res.end(err);
    res.json(project);
  });
};

exports.registerProject = (req, res) => {
  let new_project = new Project(req.body);

    new_project.save((err, project) => {
      if(err){
        res.status(400);
        res.json({error: err.message});
      }
      else{
        res.json(project);
      }
    })
};
