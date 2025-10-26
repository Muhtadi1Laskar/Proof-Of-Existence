import proofModel from "../models/proof.model.js";

export const retriveByOwner = async (owner) => {
    if (!owner) {
        throw new Error("Give a valid owner name");
    }

    if (owner.length === 0) {
        throw new Error("Owner cannot be empty");
    }

    const proof = await proofModel.find({ owner });

    if (proof.length === 0) {
        throw new Error(`No proofs under the owner ${owner}`);
    }

    return proof;
}