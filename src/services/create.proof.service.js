import proofModel from "../models/proof.model.js";

export const createProof = async (hash, owner, metadata) => {
    const timestamp = new Date().toISOString();

    const existing = await proofModel.findOne({ hash, owner });
    if (existing) throw new Error("Proof already exists");

    const proof = await proofModel.create({
        hash,
        algorithm: "SHA-256",
        timestamp,
        owner,
        onChainTx: "",
        metadata
    });

    await proof.save();

    return {
        id: proof._id,
        owner: proof.owner,
        fileHash: proof.hash,
        metadata: proof.metadata,
        timeStamp: proof.timestamp,
        onChainTx: proof.onChainTx
    };
}