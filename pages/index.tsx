import styles from "./styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useState } from "react";
import OpenBooster from "../components/OpenBooster";

const Home: NextPage = () => {
  const [rankName, setRankName] = useState<string>("");

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Signature-Based Minting</h1>
      <p className={styles.explain}>Connect your wallet to get started:</p>
      <ConnectButton />

      <p className={styles.explain}>Signature-based minting of Booster packs</p>
      <p>
        Hint: Signatures are only generated if you match a correct{" "}
        <b>Mothora rank</b>! 😉
      </p>

      <hr className={styles.divider} />

      <div className={styles.collectionContainer}>
        <h2 className={styles.ourCollection}>
          Open your booster pack and get random NFTs!
        </h2>

        <input
          type="text"
          placeholder="Name of a Mothora rank"
          className={styles.textInput}
          maxLength={26}
          onChange={(e) => setRankName(e.target.value)}
        />
      </div>
      <OpenBooster rankName={rankName} />
    </div>
  );
};

export default Home;
