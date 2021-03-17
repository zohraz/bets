/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {

    /*
      email: {
        type: 'string',
        isEmail: true,
        unique: false,
        required: false
      },
*/
      email: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true
      },
      phone: {
        type: 'string',
         required: true,
        unique: true,
      },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true
    },
    uid: {
      type: 'string'
    },
    amount: {
      type: 'number'
    },
    
    datenaissance: {
      type: 'string'
    },
    ville: {
      type: 'string'
    },
    etat: {
      type: 'string'
    },
    createdby: {
      type: 'string'
    },
    role: {
      model: 'Role',
  },
    // One-to-Many -> Add a reference to Posts 
 
    },
  customToJSON: function() {
     return _.omit(this, ['password'])
  },
 
};
