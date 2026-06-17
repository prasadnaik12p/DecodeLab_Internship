const Recipe = require('../models/Recipe');

module.exports.createRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions } = req.body;
        console.log("Session:", req.session);
        console.log("User:", req.session?.user);
        
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthorized - Please login first' });
        }
        
        const userId = req.session.user._id;

        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            user: userId
        });
        await newRecipe.save();

        res.status(201).json({ message: 'Recipe created successfully' , recipe: newRecipe});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.getAllRecipes = async (req, res) => {    
    try {
        const recipes = await Recipe.find().populate('user', 'name');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.getRecipesByUser = async (req, res) => {
    try {
        if (!req.session.user) {
            return res.status(401).json({ message: 'Unauthorized - Please login first' });
        }
        
        const userId = req.session.user._id;
        const recipes = await Recipe.find({ user: userId });
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.getRecipeByName = async (req, res) => {
    try {
        const { name } = req.params;
        const recipe = await Recipe.findOne({ title: name });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, ingredients, instructions } = req.body;
        const userId = req.session.user._id;

        const recipe = await Recipe.findOne({ _id: id, user: userId });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        recipe.title = title || recipe.title;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;

        await recipe.save();
        res.json({ message: 'Recipe updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports.deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.session.user._id;

        const recipe = await Recipe.findOne({ _id: id, user: userId });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        await Recipe.deleteOne({ _id: id });
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};