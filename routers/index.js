module.exports = function(router){
	var Proposals = require('../models/proposals');
	var Taxonomies = require('../models/taxonomies');
	var Users = require('../models/users');

	router.get('/', function(req, res) {
  		res.render('index', { title: 'Express' });
	});
/**************** WEB PROPOSAL *******************/
	router.get('/proposals', function(req, res) {
		Proposals.find({})
			.populate({path:'tid'})
			.exec(function(err,proposal){
				if(!err) res.render('proposals/list',{list:proposal});
				else console.log('ERROR:'+err);
			});
  		
	});
	router.get('/proposals/new', function(req, res) {
		Taxonomies.find(function(err,objTaxonomies){
			var objProposal = new Proposals();
			if(!err) res.render('proposals/save',{objTaxonomies:objTaxonomies,objProposal:objProposal,type:"new"}); 
			else console.log('ERROR:'+err);
		});
		
	});
	router.get('/proposals/view/:id', function(req, res) {
		Proposals.findById(req.params.id).populate({path:'tid'})
			.exec(function(err,proposal){
				if(!err) res.render('proposals/view',{proposal:proposal});
				else console.log('ERROR:'+err);
			});
	});

	router.get('/proposals/update/:id', function(req, res) {
		Proposals.findById(req.params.id,function(err,objProposal){
			Taxonomies.find(function(err,objTaxonomies){
				if(!err) res.render('proposals/update',{objTaxonomies:objTaxonomies,objProposal:objProposal,type:"update"}); 
				else console.log('ERROR:'+err);
			});
		});
		
	});

	router.post('/proposals/update/:id', function(req, res) {
		if(req.body.state){req.body.state = 1;} else {req.body.state = 0;}
		Proposals.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.redirect('/proposals');
			else console.log('ERROR:'+err);
		});
	});

	router.post('/proposals/new', function(req, res) {
			var objProposal = new Proposals();
			objProposal.name = req.body.name;
			objProposal.description = req.body.description;
			if(req.body.state){objProposal.state = 1; }else{ objProposal.state = 0;}
			objProposal.visitsAll = 0;
			objProposal.likeAll = 0;
			objProposal.dislikeAll = 0;
			objProposal.shareAll = 0;
			objProposal.favoriteAll = 0;
			objProposal.abvocacyAll = 0;
			objProposal.disagreementAll= 0;
			objProposal.neutralAll = 0;
			//objProposal.uid = req.body.uid;
			objProposal.positionX = req.body.positionX;
			objProposal.positionY = req.body.positionY;
			//objProposal.create = req.body.create;
			objProposal.tid = req.body.tid;
			//objProposal.typedata = req.body.typedata;
			//objProposal.files = req.body.files;
		  console.log(objProposal);
		  objProposal.save(function(err){
			if(!err) res.redirect('/proposals');
			else console.log('ERROR:'+err);
		});
	});
/*************** WEB TAXONIMIES **************/
	router.get('/taxonomies', function(req, res) {
		Taxonomies.find({active:1}).populate({path:'fbid'}).populate({path:'fhid'}).exec(function(err,taxonomies){
			if(!err) res.render('taxonomies/list',{list:taxonomies});
			else console.log('ERROR:'+err);
		});	
	});

	router.get('/taxonomy/new', function(req, res) {
		var objTaxonomy = new Taxonomies();
		var column = [{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12}]
		res.render('taxonomies/save',{objTaxonomy:objTaxonomy,column:column}); 
		
	});

	router.post('/taxonomy/new', function(req, res) {
		var objTaxonomy = new Taxonomies();
		objTaxonomy.name = req.body.name;
		objTaxonomy.description = req.body.description;
		objTaxonomy.type = "system";
		objTaxonomy.column = req.body.column;
		if(req.body.state){
			objTaxonomy.state = "1";
		}else{
			objTaxonomy.state = "0";
		}
		objTaxonomy.active = 1;
		objTaxonomy.fbid ="571d87c8f365dc71733349ed";
		objTaxonomy.fhid ="571d87c8f365dc71733349ed";
		objTaxonomy.save(function(err){
			if(!err) res.redirect('/taxonomies');
			else console.log('ERROR:'+err);
		});
	});
	router.get('/taxonomy/update/:id', function(req, res) {
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
			var column = [{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10},{value:11},{value:12}]
			if(!err) res.render('taxonomies/update',{objTaxonomy:objTaxonomy,column:column});
				else console.log('ERROR:'+err);
		});
		
	});
	router.post('/taxonomy/update/:id', function(req, res) {
		if(req.body.state){req.body.state = "1";} else {req.body.state = "0";}
		console.log(req.body);
		Taxonomies.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.redirect('/taxonomies');
			else console.log('ERROR:'+err);
		});
	});
	router.get('/taxonomy/delete/:id', function(req, res) {
		Taxonomies.findById(req.params.id,function(err,objTaxonomy){
				if(!err) res.render('taxonomies/delete',{objTaxonomy:objTaxonomy});
				else console.log('ERROR:'+err);
		});
	});

/*************** WEB USER **************/
	router.get('/users', function(req, res) {
		Users.find({active:1}, function(err,users){
			if(!err) res.render('users/list',{list:users});
			else console.log('ERROR:'+err);
		});	
	});

	router.get('/user/new', function(req, res) {
		var objUser = new Users();
		res.render('users/save',{objUser:objUser}); 
	});
	router.post('/user/new', function(req, res) {
		var objUser = new Users();
		objUser.username = req.body.username;
		objUser.password = encriptarPassword(req.body.username,req.body.password);
		objUser.email = req.body.email;
		objUser.state = "1";
		objUser.active ="1";
		objUser.positionX ="";
		objUser.positionY ="";
		objUser.picture ="571d87c8f365dc71733349ed";
		objUser.save(function(err){
			if(!err) res.redirect('/users');
			else console.log('ERROR:'+err);
		});
	});

	router.get('/user/update/:id', function(req, res) {
		Users.findById(req.params.id,function(err,objUser){
			if(!err) res.render('users/update',{objUser:objUser});
				else console.log('ERROR:'+err);
		});
		
	});

	router.post('/user/update/:id', function(req, res) {
		if(req.body.password){
			req.body.password = encriptarPassword(req.body.username,req.body.password);
		}

		Users.findByIdAndUpdate(req.params.id,req.body,function(err){
			if(!err) res.redirect('/users');
			else console.log('ERROR:'+err);
		});
	});

	encriptarPassword = function(username, password){
		var crypto = require('crypto')
  		 // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
	   var hmac = crypto.createHmac('sha1', username).update(password).digest('hex')
	   return hmac
	}

/**************** LOGIN *******************************/
	router.get('/login', function(req, res) {
		res.render('users/login');
	});
	router.post('/login', function(req, res) {
		Users.findOne({username:req.params.username},function(err,objUser){
			if(!err){	
				if(objUser){
					if(objUser.password === encriptarPassword(req.params.username,req.params.pass)){
						res.redirect('/');
					}else{
						res.json({mensaje:"El password es incorrecto"});
					}
				}else{
					res.json({mensaje:"El usuario no existe"});
				}
			}else console.log('ERROR:'+err);
		});
	});

}
