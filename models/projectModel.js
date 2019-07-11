const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('studentSchema', student);
module.exports = mongoose.model('projectSchema', projectSchema);
