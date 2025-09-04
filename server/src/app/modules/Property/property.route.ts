import { Router } from "express";
import { PropertyControllers } from "./property.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { upload } from "../../../helpars/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import validateRequest from "../../middlewares/validateRequest";
import { PropertyValidations } from "./property.validation";

const router = Router();

router.route("/")
 	.post(
		auth("-----"),
		upload.single("image"),
		parseBodyData,
		validateRequest(PropertyValidations.createPropertySchema),
		PropertyControllers.createProperty
	)
  .get(PropertyControllers.getPropertys);

router
	.route("/:id")
	.get(PropertyControllers.getPropertyById)
	.put(
		auth("-----"),
		upload.single("image"),
		parseBodyData,
		validateRequest(PropertyValidations.updatePropertySchema),
	    PropertyControllers.updateProperty)
	.delete(PropertyControllers.deleteProperty);

export const PropertyRoutes = router;