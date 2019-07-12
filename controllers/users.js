const User = require('../models/user');

module.exports = {
  index,
  showInfo,
  addInfo,
  home,
  viewInfo,
  updateInfo,
  showDiet,
  showExercises,
  addImage,
  beginnerT,
  intermediateT
};

function showDiet(req, res, next){
  res.render('diets');
}

function beginnerT(req, res){
  res.render('beginnerT')
}

function intermediateT(req, res){
  res.render('intermediateT')
}

function addImage(req, res){
  req.user.image = req.body;
  req.user.save(function(err){
    res.redirect('/home');
  })
}

function showExercises(req, res, next){
  res.render('exercises', {
    user: req.user
  });
}

function home(req, res){
  var userInfo = req.user.info;
  var bmr;
  var calIntake;
  var carb;
  var prot;
  var fat;

  if(userInfo.gender == 'female'){
    bmr = Math.floor(655.1 + (4.35 * userInfo.weight) 
    + (4.7 * userInfo.height) - (4.7 * userInfo.age));
  } else { 
    bmr = Math.floor(66.47 + (6.24 * userInfo.weight) 
    + (12.7 * userInfo.height) - (7.755 * userInfo.age)); 
  }

  switch(userInfo.goal){
    case 'weight loss':
    calIntake = bmr - 500;
    carb = Math.floor(calIntake * 0.4);
    prot = Math.floor(calIntake * 0.45);
    fat = Math.floor(calIntake * 0.15);
    break;
    case 'muscle gain':
    calIntake = bmr + 500;
    carb = Math.floor(calIntake * 0.4);
    prot =  Math.floor(calIntake * 0.4);
    fat = Math.floor(calIntake * 0.2);
    break
    default:
    calIntake = bmr;
    carb = Math.floor(calIntake * 0.5);
    prot = Math.floor(calIntake * 0.35);
    fat = Math.floor(calIntake * 0.15);
  }

  res.render('home', {
    user: req.user,
    bmr: bmr, 
    calIntake: calIntake,
    carb: carb,
    prot: prot,
    fat: fat
  });
}

function addInfo(req, res, next){
  req.user.info = req.body;
  req.user.save(function(err){
    res.redirect('/home');
  })
}

function showInfo(req, res, next){
  if(req.user.info) return res.redirect('/home');
  res.render('info', {user: req.user});
}

function viewInfo(req, res, next){
  res.render('updateinfo', {user: req.user});
}

function updateInfo(req, res, next){
  var email = req.user.email
  var information = req.user.info
  
  User.findOneAndUpdate({email: email}, {$set:{info:
    req.body
  }},function(err, doc){
    if(err){
      console.log("Something wrong when updating data!");
    }
    console.log(doc);
});
res.redirect('home')
}

function index(req, res, next) {
  res.render('users/index', {
    user: req.user,
    name: req.query.name
  });
}