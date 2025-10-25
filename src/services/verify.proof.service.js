import proofModel from "../models/proof.model.js";

export const verifyProof = async (hash, owner) => {
    const proof = await proofModel.findOne({ hash, owner });

    if (!proof) {
        throw new Error("Proof doesn't exists");
    }
    return proof;
}