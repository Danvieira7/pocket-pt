const Recipe = require('../models/recipe');

module.exports = {
    showFlex,
    showKeto,
    showPaleo,
    newFlex,
    newPaleo,
    newKeto,
    addMeal,
    deleteMeal
       
}


function deleteMeal(req, res){

    console.log(req.params.id)
    Recipe.findByIdAndRemove(req.params.id, function(err, deletedRecipe){
        res.redirect('/flexDiet')
    })
}

function addMeal(req, res, next){
    var recipe = new Recipe(req.body);
    recipe.image = req.file.url;
    console.log(req.body);
    recipe.save(function(err){
        switch(req.body.dietStyle){
            case 'flexible':
            res.redirect('/flexDiet');
            break;
            case 'keto':
            res.redirect('/keto');
            break
            case 'paleo':
            res.redirect('/paleo');
            break
        }
    });
}

function showFlex(req, res){
    Recipe.find({dietStyle: "flexible"}).then(function(r) {
        res.render('flexDiet', {recipe: r || null});
    })
}

function showKeto(req, res){
    Recipe.find({dietStyle: "keto"}).then(function(r) {
        res.render('keto', {recipe: r || null});
    })
}

function showPaleo(req, res){
    Recipe.find({dietStyle: "paleo"}).then(function(r) {
        res.render('paleo', {recipe: r || null});
    })
}

function newFlex(req, res){
    res.render('recipes/newFlex');
}

function newKeto(req, res){
    res.render('recipes/newKeto');
}

function newPaleo(req, res){
    res.render('recipes/newPaleo');
}

function showRecipe(req, res, next){
    if(req.user.info) return res.redirect('/home');
    res.render('info', {user: req.user});
}


