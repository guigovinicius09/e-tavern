import { Router } from "express";
import {
  createStyle,
  getAllStyles,
  updateStyles,
} from "../controllers/style.controller";
import {
  createBrewery,
  getAllBreweries,
  updateBrewery,
} from "../controllers/brewery.controller";
import {
  createLabel,
  getAllLabels,
  deleteLabel,
  updateLabel,
} from "../controllers/label.controller";

const router = Router();

//Rota dos estilos
router.get("/styles", getAllStyles);
router.post("/styles", createStyle);
router.put("/styles/:id", updateStyles);

//Rota das cervejarias
router.get("/breweries", getAllBreweries);
router.post("/breweries", createBrewery);
router.put("/breweries/:id", updateBrewery);

//Rota dos rótulos
router.post("/labels", createLabel);
router.get("/labels", getAllLabels);
router.put("/labels/:id", updateLabel);
router.delete("/labels/:id", deleteLabel);

export default router;
