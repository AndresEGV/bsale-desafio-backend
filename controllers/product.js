const { Product, Category } = require("../models/relations");
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  try {
    const { rows } = await Product.findAndCountAll({
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ["category"] },
    });
    res.status(200).send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const searchProducts = async (req, res) => {
  const { products } = req.params;
  try {
    const { rows } = await Product.findAndCountAll({
      where: {
        name: {
          [Op.like]: `${products}%`,
        },
      },
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ["category"] },
    });
    res.status(200).send(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, searchProducts };
