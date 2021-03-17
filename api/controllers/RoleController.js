/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    add :async function (req, res) {
        console.log("add role");
        Role.create({roleName: "www"}, function(err, createdUser) {
            console.log(createdUser);
        }, { fetch: true });

        }
    }
