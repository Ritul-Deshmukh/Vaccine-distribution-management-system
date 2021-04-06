const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  blood: {
    type: String
  },
  disease: {
    type: String
  }
}, {
    collection: 'patients'
  })

module.exports = mongoose.model('Patient', studentSchema)