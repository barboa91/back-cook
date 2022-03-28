const { Router } = require('express');
const controller = require("../controllers")

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/chef/:id',controller.getChefById)
router.post('/chef/createRecipe', controller.createRecipe)

module.exports = router;