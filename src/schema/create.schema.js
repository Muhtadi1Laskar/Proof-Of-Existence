import Joi from "joi";

export const proofFileSchema = Joi.object({
    owner: Joi.string()
        .required()
        .messages({
            "any.required": "owner is required",
            "string.empty": "owner cannot be empty"
        })
}).required().messages({ "any.required": "Payload is required" });


export const proofHashSchema = Joi.object({
    owner: Joi.string()
        .required()
        .messages({
            "any.required": "owner is required",
            "string.empty": "owner cannot be empty"
        }),

    hash: Joi.string()
        .required()
        .messages({
            "any.required": "hash is required",
            "string.empty": "hash cannot be empty"
        })
}).required().messages({ "any.required": "Payload is required" });