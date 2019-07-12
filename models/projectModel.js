// importation est de mongoose
const mongoose = require('mongoose');

// initialisation du schéma mongoose
const Schema = mongoose.Schema;

// student : schéma étudiant
let student = new Schema({
  lastName: {
    type: String,
    required: 'nom requis'
  },
  firstName: {
    type: String,
    required: 'prenom requis'
  },
  email: {
    type: String,
    required: 'email requis'
  }
});

  /*
  projectSchema: schéma projet
  student : schéma étudiant (utilisé)
  */
let projectSchema = new Schema({
  projectName: {
    type: String,
    required: 'nom de projet requis'
  },
  projectDescription: {
    type: String,
    required: 'Une description est requise'
  },
  studentCreator: student,
  studentsAttendees: [student]
});

/*
  adminBoSchema: schéma utilisateur
*/
let adminBoSchema = new Schema({
  pseudo: {
    type: String,
    required: 'Pseudonyme requis'
  },
  password: {
    type: String,
    required: 'Mot de passe requis'
  }
});

//export des schémas
module.exports = mongoose.model('studentSchema', student);
module.exports = mongoose.model('projectSchema', projectSchema);
module.exports = mongoose.model('adminBackofficeSchema', adminBoSchema);
