/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    AjouterMontant: function (req, res) {
        console.log("ajouter montnt")
        var nouveaumontant=0;
        User.findOne({id: req.param('iduser')}).exec(function (err, user) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            console.log(req.param('iduser'))
    
            console.log(req.param('montant'))
    
            console.log( user.amount)
    
            nouveaumontant =parseFloat(user.amount) +parseFloat(req.param('montant') ); 
            console.log( user.amount)
            User.update({ id: user.id }, {amount: nouveaumontant }).exec(function (err) {
    
    
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.send(user);
            
    
            //res.redirect('facture/list');
        });
    });
      },
    RetirerMontant: function (req, res) {
    console.log("retirer montnt")
    var nouveaumontant=0;
    User.findOne({id: req.param('iduser')}).exec(function (err, user) {
        if (err) {
            res.send(500, { error: 'Database Error' });
        }
        console.log(req.param('iduser'))

        console.log(req.param('montant'))

        console.log( user.amount)
        nouveaumontant =parseFloat(user.amount) -parseFloat(req.param('montant') ); 

        console.log( user.amount)
        User.update({ id: user.id }, {amount: nouveaumontant }).exec(function (err) {


        if (err) {
            res.send(500, { error: 'Database Error' });
        }
        res.send(user);
        

        //res.redirect('facture/list');
    });
});
  },
  listjoueurbyidshop: function(req, res) {
    //get list des admin by idsuperadmin et list des joeueur by idadmin
    console.log("list admins"+req.param('idshop'))
           
            User.find({createtedby: req.param('idshop')}).exec(function (err, users) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
               
        console.log(users.length)

        res.send(users);

    
      
       
        });
    },

  listshopbyidadmin: function(req, res) {
    //get list des admin by idsuperadmin et list des joeueur by idadmin
    console.log("list admins"+req.param('idadmin'))
           
            User.find({createtedby: req.param('idadmin')}).exec(function (err, users) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
               
        console.log(users.length)

        res.send(users);

    
      
       
        });
    },
  listadminbyidsuperadmin: function(req, res) {
    //get list des admin by idsuperadmin et list des joeueur by idadmin
    console.log("list admins"+req.param('idsuperadmin'))
           
            User.find({createdby: req.param('idsuperadmin')}).exec(function (err, users) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
               
        console.log(users.length)

        res.send(users);

    
      
       
        });
    },
    deletebyid: function (req, res) {
        console.log("files"+req.param('id'));
        User.destroy({'id' : req.param('id')}).exec(function(err){

            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            console.log("removed");
            res.send(req.param('id'));
            //res.redirect('Resataurant/list');
        });
        return false;
      },

  Listuserbyrole: function(req, res) {
    console.log("eeeee")
            var listusers=[];
            Role.findOne({roleName: req.param('role')}).exec(function (err, role) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
                console.log(role)
    if(role.id!=""){
        User.find({role: role.id}).exec(function (err, users) {
    
            res.send(users);
        });
    }
    else{
        res.send('vide');
    
    
    }
              
    
            
        });
    },
    

    finbyPhone: function (req, res) {
        console.log("phoooooooooone")
        console.log(req.param('phone'));
        // id: 5a8fd95a1db6c4d4874dc7ae
       
        User.findOne({ phone: req.param('phone') }).exec(function (err, user) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
    
            console.log(user)
            res.send(user);
        });
    },
    changeretatuser: function (req, res) {
    
        //var etat = req.body.etat;
        console.log("changer etattttttttttttt doc "+req.param('id'))
    
        User.update({ id: req.param('id') }, { etat: req.param('etat')}).exec(function (err) {
    
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.send(req.param('id'));
            //res.redirect('facture/list');
        });
      },
      delete: function (req, res) {
        console.log("delete"+req.param('id'));
        User.destroy({'id' : req.param('id') }).exec(function(err){

            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            console.log("removed");
          res.send(req.param('id'));
            //res.redirect('Resataurant/list');
        });
      },
      inscription :async function (req, res) {
        console.log("add role");
        var username = req.body.username;
    
    
        var email = req.body.email;
        var password = req.body.password;
        var phone = req.body.phone;
        var amount = req.body.amount;
        var createdby = req.body.createdby;
        var roleref = req.body.roleref;

        Role.findOne({roleName: roleref}).exec(function (err, role) {

        User.create({ username: username, etat:"actif",email: email,password:password, phone: phone , amount: amount , createdby: createdby , role: role.id}, function(err, createdUser) {
           // Role.create({roleName: "www"}, function(err, createdUser) {

            console.log(createdUser);
            if (err) {
                //res.send(500, { error: 'Database Error' });
                res.status(500).send(err)  
            }
        }, { fetch: true });
    });
    
        },
      inscription2: function (req, res) {
        console.log("modifier"+req.body.username);
    
        var username = req.body.username;
    
    
        var email = req.body.email;
        var password = req.body.password;
        var phone = req.body.phone;
        var amount = req.body.amount;
        var createdby = req.body.createdby;
        var roleref = req.body.roleref;
        console.log(username)
        console.log(password)
        console.log(phone)
        console.log(amount)

        if(roleref==="admin") {
console.log("admin")
Role.findOne({roleName: roleref}).exec(function (err, role) {
    if (err) {
        res.send(500, { error: 'Database Error' });
    }
    console.log(role)
    User.create({ username: username, etat:"actif",email: email,password:password, phone: phone , amount: amount , createdby: createdby , role: role.id}, function(err, createdUser) {
        // Role.create({roleName: "www"}, function(err, createdUser) {

         console.log(createdUser);
         if (err) {
             //res.send(500, { error: 'Database Error' });
             res.status(500).send(err)  
         }
     }, { fetch: true });
   // Role.create({roleName: "www"}).exec(function (err, result) {



        res.send(createdUser);
    }, { fetch: true });


    }
    },
      modifieruser: function (req, res) {
        console.log("modifier"+req.body.id);
    
        var idu = req.body.id;
    
        var nom = req.body.nom;
    
        var email = req.body.email;
        var datenaisance = req.body.datenaisance;
        var ville = req.body.ville;
        User.update({ id: idu }, {username: nom, email: email,datenaissance: datenaisance,ville: ville}).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            console.log('done')
          res.json(idu)
          //  res.send(idc);
            //res.redirect('facture/list');
        });
    },
    
    
    
    changermdp:function (req,res) {
        console.log("changer mot de passe")
    
        var mdp1 = req.body.mdp1;
        var idu = req.body.id;
    
    
    
            User.update({ id: idu}, { password: mdp1}).exec(function (err) {
              if (err) {
                res.send(500, { error: 'Database Error' });
              }
             // res.send({ status: 200, file: files,name:NameFile });
            // res.json('modifié')
             res.json({code:true,msg:"modifié"})
    
             });
    
    
      },

}

