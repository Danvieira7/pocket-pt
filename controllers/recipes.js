const Recipe = require('../models/recipe');



module.exports = {
    showFlex,
    showKeto,
    showPaleo,
    newFlex,
    newPaleo,
    newKeto,
    addMeal
       
}

function addMeal(req, res, next){
    // console.log(req.body);

    Recipe.create(req.body, function (err, recipe) {

        if (err) return handleError(err);
        switch(req.body.dietStyle){
            case 'flexible':
            res.render('flexDiet', {
                recipe
            });
            break;
            case 'keto':
            res.render('keto', {
                recipe
            });
            break
            case 'paleo':
            res.render('paleo', {
                recipe
            });
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


