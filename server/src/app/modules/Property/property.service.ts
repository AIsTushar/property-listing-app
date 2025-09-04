import { Request } from "express";
import prisma from "../../../shared/prisma";
import QueryBuilder from "../../../utils/queryBuilder";
import {
	propertyFilterFields,
	propertyInclude,
	propertyNestedFilters,
	propertyRangeFilter,
	propertySearchFields,
} from "./property.constant";
import config from "../../../config";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { Prisma } from "@prisma/client";


const createProperty = async (req: Request) => {
	const payload = req.body;
	if (req.file?.filename) {
		payload.image = `${config.backend_url}/uploads/${req.file.filename}`;
	}

	const property = await prisma.property.create({ data: payload });

	return property;
};

const getPropertys = async (req: Request) => {
	const queryBuilder = new QueryBuilder(req.query, prisma.property);
	const results = await queryBuilder
		.filter(propertyFilterFields)
		.search(propertySearchFields)
		.nestedFilter(propertyNestedFilters)
		.sort()
		.paginate()
		.include(propertyInclude)
		.fields()
		.filterByRange(propertyRangeFilter)
		.execute();

	const meta = await queryBuilder.countTotal();
	return { data: results, meta };
};

const getPropertyById = async (id: string) => {
	return prisma.property.findUnique({ where: { id } });
};

const updateProperty = async (req: Request) => {
	const { id } = req.params;
	const data= req.body;
	const user = req.user;
	const role = user?.role;

	if (req.file?.filename) {
		data.documentUrl = `${config.backend_url}/uploads/${req.file.filename}`;
	}

	const whereClause: Prisma.PropertyWhereUniqueInput = {
		id,
		...(role === "-----" ? { userId: user.id } : {}),
	};

	const existing = await prisma.property.findUnique({ where: whereClause });
	if (!existing) {
		throw new ApiError(httpStatus.NOT_FOUND, `Property not found with this id: ${id}`);
	}

	return prisma.property.update({
		where: whereClause,
		data: {
			...data,
		},
	});
};

const deleteProperty = async (req: Request) => {
	await prisma.property.delete({ where: { id: req.params.id } });
};

export const PropertyServices = {
	getPropertys,
	getPropertyById,
	updateProperty,
	deleteProperty,
	createProperty
};