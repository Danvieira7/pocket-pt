var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');
// const multer = require('multer');
// const cloudinary = require('cloudinary');
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const storage = cloudinaryStorage({
//  cloudinary: cloudinary,
//  folder: 'demo',
//  allowedFormats: ['jpg', 'jpeg', 'png'],
//  transformation: [{ width: 600, height: 600, crop: 'limit' }]
// });
// const parser = multer({ storage: storage });

// , parser.single('image')
router.get('/flexDiet', recipesCtrl.showFlex);
router.get('/keto', recipesCtrl.showKeto);
router.get('/paleo', recipesCtrl.showPaleo);
router.get('/recipes/newFlex', recipesCtrl.newFlex);
router.get('/recipes/newKeto', recipesCtrl.newKeto);
router.get('/recipes/newPaleo', recipesCtrl.newPaleo);
router.post('/recipes/newFlex', recipesCtrl.addMeal)
router.post('/recipes/newPaleo', recipesCtrl.addMeal)
router.post('/recipes/newKeto', recipesCtrl.addMeal)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;