const passport = require('passport');


module.exports = {


  _config: {
    actions: false,
    shortcuts: false,
    rest: false
},

    login: function(req, res) {
console.log("loooogin")
        passport.authenticate('local', function(err, user, info) {
            console.log(user)

            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });

        })(req, res);
    },

logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};