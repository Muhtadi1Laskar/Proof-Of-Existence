import Joi from "joi";

export const proofFileSchema = Joi.object({
    owner: Joi.string()
        .required()
        .messages({
            "any.required": "owner is required",
            "string.empty": "owner cannot be empty"
        })
}).required().messages({ "any.required": "Payload is required" })