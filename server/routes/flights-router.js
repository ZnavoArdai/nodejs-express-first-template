const router = require("express").Router();
const { Router } = require("express");
const {
  getFlight,
  postFlights,
  putFlights,
  removeFlights,
  getById,
  getFirstClass,
  getByTimes,
  getByFlyAndlAND,
  getByFlyTimeAndFromWhere,
  timeAndLand
} = require("../controllers/flight-controllesr");


router.get("/", getFlight);
router.post("/create", postFlights);
router.put("/edit/:id", putFlights);
router.delete("/remove/:id", removeFlights);
router.get("/getById/:id", getById);
router.get("/firstClass", getFirstClass);
router.get("/getByTimes/:time", getByTimes);
router.get("/flyAndLand",getByFlyAndlAND)
router.get("/available",getByFlyTimeAndFromWhere)
router.get("/timeAndLand",timeAndLand)
module.exports = router;
