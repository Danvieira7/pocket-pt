var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/users', usersCtrl.index);
router.get('/info', usersCtrl.showInfo);
router.get('/updateInfo', usersCtrl.viewInfo)
router.get('/home', usersCtrl.home);
router.get('/diets', usersCtrl.showDiet);
router.get('/exercises', usersCtrl.showExercises);
router.post('/info', usersCtrl.addInfo);
router.put('/info', usersCtrl.updateInfo);
router.post('/image', usersCtrl.addImage);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
