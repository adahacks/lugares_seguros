const {addPlace, getPlaces} = require("../controllers/places");

const {Router} = require("express");

const router = Router();

router.route("/places").post(addPlace).get(getPlaces);
//router.post("/place", addPlace);

module.exports = {router};