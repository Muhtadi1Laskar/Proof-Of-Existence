import { generateHash } from "./hash.service.js"

export const createProof = async (buf, owner, metadata) => {
    const hashData = generateHash(buf);
    const timeStamp = new Date();
    const body = {
        hash: hashData,
        algorithm: "SHA-256",
        timeStamp,
        owner,
        onChainTx: "",
        metadata
    };
    return body;
}