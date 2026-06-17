const { getAllRecipes, getRecipeByName, getRecipesByUser, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createRecipe);
router.get('/', getAllRecipes);
router.get('/user', authMiddleware, getRecipesByUser);
router.put('/:id', authMiddleware, updateRecipe);
router.delete('/:id', authMiddleware, deleteRecipe);
router.get('/:name', getRecipeByName);

module.exports = router;