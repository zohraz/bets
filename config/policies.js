/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/
  // '*': true,
// 'GET /register':['isAdmin','isSuperAdmin'],
  UserController: {
    "create": ['isAdmin'],
   // "find": ['isAdmin','isSuperAdmin'],
 
   "delete":['isSuperAdmin'],

    "destroy":['isSuperAdmin']
 },
 RoleController: {
   "create": ['isSuperAdmin'],
   //"find": ['isSuperAdmin'],

   "destroy":['isSuperAdmin']
},
 AuthController: {
    '*': true
 }
};
