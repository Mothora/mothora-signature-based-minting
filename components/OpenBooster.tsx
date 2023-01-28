import * as React from "react";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
import { Booster__factory as Booster } from "../typechain-types";

function OpenBooster({ rankName }: { rankName: string }) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const verifyingContract = process.env.NEXT_PUBLIC_BOOSTER_ADDRESS;
  const { data, write } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: verifyingContract,
    abi: Booster.abi,
    functionName: "openBooster",
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const openWithSignature = async () => {
    try {
      if (!rankName) {
        alert("Please enter a rank name");
        return;
      }
      if (!address) {
        alert("User not connected");
        return;
      }
      if (!write) {
        alert("Function not ready");
        return;
      }

      if (!chain) {
        alert("Chain not ready");
        return;
      }

      // Make a request to /api/server
      const signedPayloadReq = await fetch(`/api/server`, {
        method: "POST",
        body: JSON.stringify({
          address, // Address of the current user
          rankName,
          verifyingContract,
          chainId: chain.id,
        }),
      });

      // Grab the JSON from the response
      const json = await signedPayloadReq.json();

      if (!signedPayloadReq.ok) {
        alert(json.error);
        return;
      }

      // If the request succeeded, we'll get the signed payload from the response.
      // The API should come back with a JSON object containing a field called signedPayload.
      // This line of code will parse the response and store it in a variable called signedPayload.

      const openRequest = json.openRequest;
      const signedPayload = json.signedPayload;
      write({
        recklesslySetUnpreparedArgs: [openRequest, signedPayload],
      });
      alert("Booster opened succesfully!");
    } catch (e) {
      console.error("An error occurred trying to open the NFT:", e);
    }
  };

  return (
    <div>
      <button
        disabled={!write || isLoading}
        onClick={() => openWithSignature()}
      >
        {isLoading ? "Opening..." : "Open"}
      </button>
      {isSuccess && <div>Successfully opened your booster!</div>}
    </div>
  );
}

export default OpenBooster;
