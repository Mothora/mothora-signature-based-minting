import type { NextApiRequest, NextApiResponse } from "next";
import { v4 } from "uuid";
const ethers = require("ethers");
import rankNames from "../../rankNames";

export type OpenRequestStruct = {
  opener: string; // address
  boosterId: string; // id of the booster pack to open
  quantity: string; // quantity of packs to open
  validityStartTimestamp: string;
  validityEndTimestamp: string;
  uid: string;
};

const types = {
  OpenRequest: [
    { name: "opener", type: "address" },
    { name: "boosterId", type: "uint256" },
    { name: "quantity", type: "uint256" },
    { name: "validityStartTimestamp", type: "uint128" },
    { name: "validityEndTimestamp", type: "uint128" },
    { name: "uid", type: "bytes32" },
  ],
};
export default async function server(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // De-structure the arguments we passed in out of the request body
    const { address, rankName, verifyingContract, chainId } = JSON.parse(
      req.body
    );

    // You'll need to add your private key in a .env.local file in the root of your project
    // !!!!! NOTE !!!!! NEVER LEAK YOUR PRIVATE KEY to anyone!
    if (!process.env.PRIVATE_KEY) {
      throw new Error("You're missing PRIVATE_KEY in your .env.local file.");
    }

    const domain = {
      name: "Booster",
      version: "1",
      verifyingContract,
      chainId,
    };

    // 1) Check that it's a rank we know about
    // This demonstrates how we can restrict what kinds of NFTs we give signatures for
    if (!rankNames.includes(rankName)) {
      res.status(400).json({ error: "That's not one of the ranks we know!" });
      return;
    }

    const privateKey = Buffer.from(process.env.PRIVATE_KEY as string, "hex");

    const wallet = new ethers.Wallet(privateKey);

    const buffer = Buffer.alloc(16);
    v4({}, buffer);
    const uid = ethers.utils.hexlify(
      ethers.utils.toUtf8Bytes(buffer.toString("hex"))
    );

    const openRequest: OpenRequestStruct = {
      opener: address,
      boosterId: "0",
      quantity: "1",
      validityStartTimestamp: "0",
      validityEndTimestamp: "1923493098",
      uid,
    };

    const signature = await wallet._signTypedData(domain, types, openRequest);

    const signedPayload = ethers.utils.joinSignature(
      ethers.utils.splitSignature(signature)
    );

    // Return back the signedPayload to the client.
    res.status(200).json({
      openRequest: JSON.parse(JSON.stringify(openRequest)),
      signedPayload: JSON.parse(JSON.stringify(signedPayload)),
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
}
