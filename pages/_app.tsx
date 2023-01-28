import "./styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { goerli, arbitrumGoerli } from "@wagmi/core/chains";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [goerli, arbitrumGoerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_TOKEN || "" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Mothora",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

// Pass client to React Context Provider
function MyApp({ Component, pageProps }: any) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
