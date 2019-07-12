//import de mongoose
const mongoose = require('mongoose');

// récupération du modèle schéma via le modèle
const Project = require('../models/projectModel');

exports.displayForm = (req, res) => {
   res.render('index',{ title: 'Hey', message: 'Hello there!' });
};

exports.registerProject = (req, res) => {
  let new_project = new Project(req.body);

    console.log("toto",req.body);
    new_project.save((err, project) => {
      if(err){
        res.status(400);
        res.json({error: err.message});
      }
      else{
        res.json(project);
        //console.log(res.json(project));
      }
    })
};

exports.displayAll = (req, res) => {
    Project.find({}, (err, project) => {
  if(err) res.end(err);
  res.json(project);
  });
}
