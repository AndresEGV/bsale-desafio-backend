const { Product, Category } = require("../models/relations");
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  try {
    const data = await Product.findAndCountAll({
      include: [
        {
          model: Category,
        },
      ],
      attributes: { exclude: ["category"] },
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };
