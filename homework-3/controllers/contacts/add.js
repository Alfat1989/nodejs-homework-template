const { Contact } = require("../../models");

const add = async (req, res) => {
  const { body } = req;
  const result = await Contact.create(body);
  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = add;
