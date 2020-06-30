/**
 * This class handles all of the admin-related requests
 */

// Imports
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// getting the add project page with the form
// use the HTML template to dynamically render HTML pages
router.get("/add-product", adminController.getAddProductPage);

// Keeping track of the new product information and redict
router.post("/add-product", adminController.postProductAndRedirect);

// Fetching product lists in the admin page
router.get("/admin-products", adminController.getDisplayProductPage);

// Fetching product information for editing (updating)
router.get("/edit-product/:productId", adminController.getEditProductPage);

// Updating the admin product through the POST request
router.post("/edit-product", adminController.updateAdmindProduct);

// Updating the deleted product thrpugh the POST request
router.post("/delete-product", adminController.postDeleteProduct);

// Exporting the routes
module.exports = router;
