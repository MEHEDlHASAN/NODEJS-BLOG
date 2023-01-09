const createCategory = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category created route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const getCategories = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category list route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const getCategory =  async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Category route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Delete category route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    res.json({
      status: 'Success',
      data: 'Update comment route'
    })
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory
}