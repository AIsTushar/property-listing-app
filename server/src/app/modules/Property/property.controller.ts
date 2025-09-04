import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PropertyServices } from "./property.service";

const createProperty = catchAsync(async (req, res) => {
	const result = await PropertyServices.createProperty(req);
	sendResponse(res, {
		statusCode: httpStatus.CREATED,
		success: true,
		message: "Property created successfully",
		data: result,
	
	});
});
const getPropertys = catchAsync(async (req, res) => {
	const result = await PropertyServices.getPropertys(req);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Propertys retrieved successfully",
		data: result.data,
		meta: result.meta,
	});
});

const getPropertyById = catchAsync(async (req, res) => {
	const result = await PropertyServices.getPropertyById(req.params.id);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Property retrieved successfully",
		data: result,
	});
});

const updateProperty = catchAsync(async (req, res) => {
	const result = await PropertyServices.updateProperty(req);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Property updated successfully",
		data: result,
	});
});

const deleteProperty = catchAsync(async (req, res) => {
	await PropertyServices.deleteProperty(req);
	sendResponse(res, {
		statusCode: httpStatus.NO_CONTENT,
		success: true,
		message: "Property deleted successfully",
		data: null,
	});
});

export const PropertyControllers = {
	getPropertys,
	getPropertyById,
	updateProperty,
	deleteProperty,
	createProperty,
};