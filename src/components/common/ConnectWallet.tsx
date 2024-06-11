'use client'
import React from "react";
import type { ThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

function ConnectWallet({ client }: { client: ThirdwebClient }) {
  const wallets = [
    createWallet("com.coinbase.wallet"),
    inAppWallet({
      auth: {
        options: ["email", "google"],
      },
    }),
  ];
  return (
    <ConnectButton
      client={client}
      connectModal={{ size: "compact" }}
      appMetadata={{
        name: "XDD",
        url: "https://example.com",
      }}
      wallets={wallets}
    />
  );
}

export default ConnectWallet;
