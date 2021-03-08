/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  console.log(req.isAuthenticated())
 // console.log(req.session.passport.user)
  
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
  if(req.isAuthenticated()){
    console.log("okkkk"+req.session.passport.user)

    User.findOne({id: req.session.passport.user}).populate('role').exec(function (err, user) {
      if (err) {
          res.send(500, { error: 'Database Error' });
      }
      console.log("user.role.roleName")

      console.log(user.role.roleName)

    
      if (user.role.roleName==="admin"){
        console.log("okkkk admin")

        {  return next();  }
      }
      else {
  
        return res.redirect('/login');
    
      }
      });
      
     
  }
    
  
else{
  return res.redirect('/login');

}
  
  

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
};
