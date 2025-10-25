import { generateHash } from "./hash.service.js"
import proofModel from "../models/proof.model.js";

export const createProof = async (buf, owner, metadata) => {
    const hash = generateHash(buf);
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

    return proof;
}