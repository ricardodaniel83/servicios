module.exports = function(router){
	var Users = require('../models/users');

	//GET Id
	findByIdUser = function(req,res){
		Users.findById(req.params.id,function(err,objUser){
			if(!err) res.json(objUser);
			else console.log('ERROR:'+err);
		});
	}

	//GET VALIDATE USER

	validateUser = function(req,res){
		Users.findOne({username:req.params.username},function(err,objUser){
			if(!err){	
				if(objUser){
					if(objUser.password === encriptarPassword(req.params.username,req.params.pass)){
						res.json({mensaje:"true"});
					}else{
						res.json({mensaje:"El password es incorrecto"});
					}
				}else{
					res.json({mensaje:"El usuario no existe"});
				}
			}else console.log('ERROR:'+err);
		});
	}
	encriptarPassword = function(username, password){
		var crypto = require('crypto')
  		 // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
	   var hmac = crypto.createHmac('sha1', username).update(password).digest('hex')
	   return hmac
	}

	//POST
	addUser = function(req,res){
		var objUser = new Users();
			objUser.username = req.body.username;
			objUser.email = req.body.email;
			objUser.password = encriptarPassword(req.body.username,req.body.password);
			objUser.positionX = req.body.positionX;
			objUser.positionY= req.body.positionX;
			objUser.positionY= req.body.positionX;
			objUser.state = req.body.state;
		objUser.save(function(err){
			if(!err) res.json({message:'Usuario adicionada'});
			else console.log('ERROR:'+err);
		});
	}


	//PUT UPDATE Id
	updateUser = function(req,res){
		Users.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.json({message:'Usuario Actualizada con exito'});
			else console.log('ERROR:'+err);
		});
	}

	router.route('/api/users').post(addUser);
	router.route('/api/users/:id').get(findByIdUser);
	router.route('/api/users/validate/:username/:pass').get(validateUser);
	//router.route('/users/pass').post(validateUser);
	router.route('/api/users/:id').put(updateUser);
}
