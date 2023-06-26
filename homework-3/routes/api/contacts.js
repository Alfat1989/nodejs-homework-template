const express = require("express");
// const { Product } = require("../../models");

const { ctrlWrapper } = require("../../middlewares");
const { contactsOperations } = require("../../controllers");

const router = express.Router();

// router.get("/", async (req, res) => {
//   const products = await Product.find({});
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       products,
//     },
//   });
// });

router.get("/", ctrlWrapper(contactsOperations.getAll));

router.get("/:contactId", ctrlWrapper(contactsOperations.getById));

router.post("/", ctrlWrapper(contactsOperations.add));

router.put("/:contactId", ctrlWrapper(contactsOperations.updateById));

router.delete("/:contactId", ctrlWrapper(contactsOperations.removeById));

router.patch(
  "/:contactId/favorite",
  ctrlWrapper(contactsOperations.updateFavorite)
);

module.exports = router;
