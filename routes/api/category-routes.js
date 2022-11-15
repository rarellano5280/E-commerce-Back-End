const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    res.status(200).json (categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // create a new category
router.post('/', async (req, res) => {
try {
  const newCategory = await Category.create(req.body);
  res.status(200).json(newCategory);
} catch (err) {
  res.status(400).json(err);
}
});

  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateCategory[0]) {
      res.status(404).json({ message:'No user with this ID!'})
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory) {
      res.status(404).json({ message: 'No user with this ID!'});
      return;
    }
    res.status(200).json ({ message: 'No user with this ID!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
